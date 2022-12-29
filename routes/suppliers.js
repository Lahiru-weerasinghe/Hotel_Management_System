const express = require('express');
const suppliers = require('../models/suppliers');

const router = express.Router();

//save suppliers
router.post('/supplier/save',(req,res)=>{

    let newsupplier = new suppliers(req.body);

    newsupplier.save((err)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"suppliers saved successfully"
        });
    });
});

//get suppliers
router.get('/suppliers',(req,res)=> {
    suppliers.find().exec((err,suppliers)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingSuppliers:suppliers
        });
    });
});

//get a specific supplier
router.get("/supplier/:id",(req,res)=>{
    let supplierID = req.params.id;
    suppliers.findById(supplierID,(err,supplier)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
            return res.status(200).json({
                success:true,
                supplier
            });
    });
});

//update suppliers
router.put('/supplier/update/:id',(req,res)=> {
    suppliers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,suppliers)=> {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"updated successfully"
        });
    }
    );

});

//delete supplier
router.delete('/supplier/delete/:id',(req,res)=> {
    suppliers.findByIdAndRemove(req.params.id).exec((err,deletedSupplier)=> {
        if(err) return res.status(400).json({
            message:"delete unsuccesful",err
        });

        return res.json({
            message:"delete succesful",deletedSupplier
        });

    });
});

module.exports = router;
