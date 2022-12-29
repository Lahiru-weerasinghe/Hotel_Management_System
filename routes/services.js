const express = require('express');
const services = require('../models/services');
const Services = require('../models/services');

const router = express.Router();

//save package
router.post('/service/save' , (req,res)=>{
    let newService = new Services(req.body);

    newService.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });

        }
        return res.status(200).json({
            success:"Package save successfully"
        });


    });
});

//get package
router.get('/services' , (req,res) =>{
    Services.find().exec((err , services)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }

        return res.status(200).json({
            success:true,
            exsistingService:services
        });
    });
});


//get specific package
router.get("/service/:id", (req,res) =>{

    let serviceId = req.params.id;

    Services.findById(serviceId, (err,service) =>{
        if(err){
            return res.status(400).json({success:false, err})
        }

        return res.status(200).json({
            success:true,
            service
        });
    });

})






//update 
router.put('/service/update/:id', (req,res)=>{
    Services.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body 

        },
        (err,service)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Update Successfully"
            });
        }
    );
});

//delete post
router.delete('/service/delete/:id' , (req,res)=>{
    Services.findByIdAndRemove(req.params.id).exec((err,deletedService) =>{

        if(err) return res.status(400).json({
            message:"Deleted succefully",deletedService
        });
    });
});


module.exports = router;