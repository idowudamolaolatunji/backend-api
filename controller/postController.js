
const Post = require('../model/postModel.js');

exports.createPost = async function(req, res){
    try{
        const createdPost = await Post.create({
            author:req.body.author,
            date:req.body.date,
            description:req.body.description,
            title:req.body.title,
            image:req.body.image, 
        });
        console.log(req.body);

        res.status(201).json({
            status:'success',
            message: 'Post successfully uploaded...',
            data: {
                post:createdPost
            }
        })
    } catch(err){
        res.status(400).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.getAllPosts = async function (req,res){
    try{
        const posts= await Post.find();

        res.status(200).json({
                status:'success',
                data:{
                    posts:posts
                }
            })
    } catch(err){
        res.status(400).json({
            status:'fail',
            message: err.message
        })
    }
}