const express = require('express');
const Requests = require("../models/Request.model");

const router = express.Router();

router.post('/request/save',(req,res)=>{

    let newRequest = new Requests(req.body);

    newRequest.save((err)=>{
        if(err){
            return res.status(400).json({
                error : err
            });
        }
        return res.status(200).json({
            success:"Request added"
        });
    });
});

router.delete('/request/delete/:id',(req,res)=>{
    Requests.findByIdAndRemove(req.params.id).exec((err,deletedRequest)=>{
        if(err) return res.status(400).json({
                message : "Delete unsuccesfull",err
            });
        return res.json({
            message:"Delete succesfull",deletedRequest
        });

      });this.name
    });

router.get('/requests',(req,res)=>{
    Requests.find().exec((err,requests) =>{
        if(err){
            return res.status(400).json({
                error : err
            });
        }
        return res.status(200).json({
            success:true,
            existingRequests:requests
        });

    });
});

module.exports = router;