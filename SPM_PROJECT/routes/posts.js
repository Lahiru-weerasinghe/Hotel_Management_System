const express = require('express');
const posts = require('../models/posts');


const router = express.Router();

//save posts

router.post('/post/save',(req,res) =>{
    let newPost = new posts(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved succesfully"
        })
    })
})

//get posts
router.get('/posts',(req,res)=>{
    posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
})

//get a specifi post
router.get("/post/:id",(req,res)=>{
    let postId = req.params.id;

    posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err})
        }
        return res.status(200).json({
            success:true,
            post
        })
    })
})

//update post
router.put("/post/update/:id",(req,res)=>{
    posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({error:err})
            }return res.status(200).json({
                success:"updated succefully"
            })
        }
    )
})

//delete posts

router.delete("/post/delete/:id",(req,res)=>{
    posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccesfull",err
        })
        return res.json({
            message:"Deleted succesfully",deletedPost
        })
    })
})

module.exports = router;
