const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = mongoose.model("User")


router.post('/signup', (req, res)=>{
    console.log(req.body.email)
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({err: "Missing fields"})
    }

    User.findOne({email}).then((existingUser) =>{
        if(existingUser){
            return res.status(422).json({err:"User alreay exists"})
        }

        bcrypt.hash(password, 14).then(hashedPassword =>{
            const newUser = new User({
                email,
                password:hashedPassword
            })
    
            newUser.save()
            .then(newUser =>{
                res.json({message:"Created user"})
            })
            .catch (err=>{
                console.log(err)
            })
        })
        .catch(error=>{
            console.log(error)
        })
        })
        

    
})

router.post('/signin', (req, res)=>{
    const {email, password} = req.body
    console.log(req.body)
    if(!email | !password){
        return res.status(400).json({err:"Missing field"})
    }

    User.findOne({email}).then(savedUser =>{
        if(!savedUser){
            return res.status(400).json({err:"Invalid user or password"})
        }
        bcrypt.compare(password, savedUser.password).then(userMatched=>{
            if(userMatched){
                res.json({message:"Succesfully logged in!"})
            }
            else{
                return res.status(400).json({err:"Invalid user or password"})
            }
        }).catch(err=>{
            console.log(err)
        })
    })
})
module.exports = router