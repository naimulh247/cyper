const express = require('express')
const router = express.Router()



router.get('/', (req, res)=>{
    res.send("hellow")
})

router.post('/signup', (req, res)=>{
    console.log(req.body.email)
    const {email, password} = req.body

    if(!email || !password){
        return res.status(400).json({err: "Missing fields"})
    }
    res.json({message:"Succesfully sent account info"})
})

module.exports = router