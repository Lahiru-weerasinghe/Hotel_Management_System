//import mongoose
const mongoose = require('mongoose');




const postSchemaRes = new mongoose.Schema({
    Name:{
        type:String,
        required: true
    },
    NIC:{
        type:String,
        required: true
    },
    Phone_No:{
        type:String,
        required: true
    },
    Package_Type:{
        type:String,
        required: true
    },
    Check_In_Date:{
        type:String,
        required: true
    },
    Check_In_Time:{
        type:String,
        required: true
    }
    


});


//DB name is Extra_Facilities
//created module export to the DB
module.exports = mongoose.model('Extra_Facilities',postSchemaRes);