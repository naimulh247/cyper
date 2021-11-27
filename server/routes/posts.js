const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin  = require('../middleware/requireLogin')
const Post = mongoose.model("Post")



router.post('/post', requireLogin, (req,res) =>{
    const {body} = req.body
    if(!body){
        return res.status(400).json({err:"Missing fields"})
    }
    // prevent the password also being sent
    req.user.password = undefined
    const newPost = new Post({
        body,
        postedBy:req.user
    })
    
    newPost.save().then(result =>{
        res.json({result})
    })
    .catch(err=>{
        console.log(err)
    })
    
    console.log("user:",req.user)
    // res.send("ok")

})


router.get('/post',requireLogin, (req, res) =>{
    Post.find()
    .populate("postedBy", "_id")
    .then(allPosts =>{
        res.json({allPosts})
    }).catch(err=>{
        console.log(err)
    })
})

router.get('/myposts', requireLogin, (req, res)=>{
    console.log("user id:",req.user._id)
    Post.find({postedBy:req.user._id})
    // .populate("postedBy")
    .then(myposts =>{
        res.json({myposts})
    }).catch(err=>{
        console.log(err)
    })
})

module.exports = router