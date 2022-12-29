const { json } = require('body-parser');
const { application } = require('express');
const express = require('express');
const Customers = require("../models/Customer.model");

const router = express.Router();

//insert customers

router.post('/customer/register',(req,res)=>{   //declare the end point

    let newCustomer = new Customers(req.body);  //access the customer details given from frontend

    newCustomer.save((err)=>{
        if(err){
            return res.status(400).json({  //display error in json format
                error : err
            });
        }
        return res.status(200).json({
            success:"Customer profile created successfully"
        });
    });
});

    
//retrieve customers

router.get('/customers',(req,res)=>{  //declare the end point
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

//update customers

router.put('/customer/update/:id',(req,res)=>{  //declare the end point and find by id
    Customers.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body   //update full body not only the id
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
  

//delete customers

router.delete('/customer/delete/:id',(req,res)=>{   //declare the end point
    Customers.findByIdAndRemove(req.params.id).exec((err,deletedCustomer)=>{
        if(err) return res.status(400).json({
                message : "Delete unsuccesfull",err
            });
        return res.json({
            message:"Delete succesfull",deletedCustomer
        });

      });this.name
    });


    //get a specific customer details by id

    router.get("/customer/:id",(req,res)=>{
        let customerId = req.params.id;             //pass the customer id
        Customers.findById(customerId,(err,customer)=>{    //find the specific id
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


    //customer login

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