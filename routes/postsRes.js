const express = require('express');
const PostsRes = require('../models/postsRes');         //Posts = PostsRes

const router = express.Router();

//Save Reservations
router.post('/Res/save',(req,res)=>{
    let newReservation = new PostsRes(req.body);        //newPost = newReservation

    newReservation.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Reservation saved successfully"    //json format key-value pairs
        });
    });
});

//Get Reservation Details
router.get('/Res',(req,res)=>{
    PostsRes.find().exec((err,reservations)=>{           
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRes:reservations
        });
    });
});

//Update Reservation Details
router.put('/Res/update/:id',(req,res)=>{
    PostsRes.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body              //use to update full body 
        },
        (err,reservation)=>{                       
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete Reservation Details 
router.delete('/Res/delete/:id',(req,res)=>{
    PostsRes.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err) return res.status(400).json({
            message:"Delete Unsuccessful",err
        });
        return res.json({
            message:"Delete Successfull",deletedPost
        });
    });
});



//get a specific post

router.get("/Res/:id",(req,res) =>{
     let ResId = req.params.id;

     PostsRes.findById(ResId,(err,post) =>{    //post sure na
         if(err){
             return res.status(400).json({success:false, err});
         }

         return res.status(200).json({
             success:true, 
             post
         });
     });
 });





module.exports = router;