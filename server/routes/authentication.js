const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")


router.get('/', (req, res)=>{
    res.send("hellow")
})

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

        const newUser = new User({
            email,
            password
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
    // res.json({message:"Succesfully sent account info"})
    
})

module.exports = router