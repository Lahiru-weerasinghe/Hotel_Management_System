const { json } = require('body-parser');
const { application } = require('express');
const express = require('express');
const Customers = require("../models/Customer.model");

const router = express.Router();

router.post('/customer/register',(req,res)=>{

    let newCustomer = new Customers(req.body);

    newCustomer.save((err)=>{
        if(err){
            return res.status(400).json({
                error : err
            });
        }
        return res.status(200).json({
            success:"Customer added"
        });
    });
});

    

router.get('/customers',(req,res)=>{
    Customers.find().exec((err,customers) =>{
        if(err){
            return res.status(400).json({
                error : err
            });
        }
        return res.status(200).json({
            success:true,
            existingCustomers:customers
        });

    });
});

router.put('/customer/update/:id',(req,res)=>{
    Customers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,customer)=>{
            if(err){
                return res.status(400).json({
                    error : err
                });
            }
            return res.status(200).json({
                success:"Updated succesfully"
            }); 

        }
    );
});

router.delete('/customer/delete/:id',(req,res)=>{
    Customers.findByIdAndRemove(req.params.id).exec((err,deletedCustomer)=>{
        if(err) return res.status(400).json({
                message : "Delete unsuccesfull",err
            });
        return res.json({
            message:"Delete succesfull",deletedCustomer
        });

      });this.name
    });

    router.get("/customer/:id",(req,res)=>{
        let customerId = req.params.id;
        Customers.findById(customerId,(err,customer)=>{
            if(err){
                return res.status(400).json({
                    success : false, err
                });
            }
            return res.status(200).json({
                success:true,
                customer
            }); 

        });
    });

    router.post('/customer/login', (req, res)=> {
       const { email, contactNumber} = req.body
        Customers.findOne({ email: email}, (err,customer) => {
            if(err){
                if(contactNumber === customer.contactNumber) {
                    res.send({ message: "Login Successfull", customer: customer})
                }else {
                    res.send({ message: "Contact Number didn't match"})
                }

            }else {
                res.send({ message:"User not registered"})
            }
        })
    })
        
        


module.exports = router;