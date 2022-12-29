const express =require('express');
const Employees = require('../models/employee');

const router =express.Router();

//save
router.post('/employee/save',(req,res)=>{
       let newEmployee = Employees(req.body);
       newEmployee.save((err)=>{
           if(err){
               return res.status(400).json({
                   error:err
               });
           }
           return res.status(200).json({
               success:"employee saved successfully"
           });
       }
       );
    });

     //get

       router.get('/employees',(req,res)=>{
            Employees.find().exec((err,employees)=>{
                if(err){
                    return res.status(400).json({
                        error:err
                    });
                }
                return res.status(200).json({
                    success:true,
                    existingEmployees:employees
                });
            });
        });

    //get a specific employee
          router.get("/employee/:id",(req,res)=>{
              let employeeId =req.params.id;

              Employees.findById(employeeId,(err,employee)=>{
                  if(err){
                      return res.status(400).json({success:false,err});
                  }
                  return res.status(200).json({
                      success:true,
                      employee
                  });
              });
          })  ;  

  //update
       
       router.put('/employee/update/:id',(req,res)=>{
           Employees.findByIdAndUpdate(
               req.params.id,
               {
                   $set:req.body
               },
               (err,employee)=>{
                   if(err){
                       return res.status(400).json({error:err});
                   }
                   return res.status(200).json({
                       success:"Updated successfully"
                   });
               }
           );
       });

       //delete
 
           router.delete('/employee/delete/:id',(req,res)=>{
               Employees.findByIdAndRemove(req.params.id).exec((err,deletedEmployee)=>{
                   if(err)return res.status(400).json({
                        message:"Unsuccessfull",err
                   });
                   return res.json({
                       message:"Deleted Successfully",deletedEmployee
                   });
               });
           }) ;   
       





    module.exports=router;