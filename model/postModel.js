
const mongoose = require('mongoose');

const postSchema= new mongoose.Schema({
    author:{
        type:String,
        reqired:true,
    },
    date:{
        type:String,
        default:Date.now,
    }, 
    title:String,
    description:String,
    image:String,
    likes:Number,
       
    // createdAt:{
    //         type:String,
    //         default:Date.now,
    //     }
    
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;