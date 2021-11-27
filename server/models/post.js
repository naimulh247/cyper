const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    body:{
        type:String,
        required:true
    },
    // likes:{
    //     type:Number,
        
    // },
    postedBy:{
        type:ObjectId,
        ref:"User"
    }
})

mongoose.model("Post", postSchema)