const jsonwebtoken = require('jsonwebtoken')
const {JSON_Key} = require('../keys')
const mongoose = require('mongoose')
const User = mongoose.model("User")

module.exports = (req, res, next) => {
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({err:"Missing authorization"})
    }

    const token = authorization.replace("Bearer ", "")
    jsonwebtoken.verify(token, JSON_Key, (err, payload)=>{
        if(err){
            return res.status(401).json({err:"Missing authorization"})
        }
        const {_id} = payload
        console.log(_id)
        User.findById(_id).then(userMatched=>{
            req.user = userMatched
            next()
        })
    })
}