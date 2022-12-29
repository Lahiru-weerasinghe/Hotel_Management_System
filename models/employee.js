const mongoose= require('mongoose');

const employeeSchema =new mongoose.Schema({

employeeId:{
     type:String,
     required:true
},
 
name:{
     type:String,
     required:true
},
designation:{
    type:String,
    required:true
},
level:{
    type:String,
    required:true
},
attendence:{
    type:String,
    required:true
},
});

module.exports=mongoose.model('employees',employeeSchema);