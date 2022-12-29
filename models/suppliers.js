const mongoose = require('mongoose');


const supplierSchema = new mongoose.Schema({
    SupplierName:{
        type:String,
        required:true
    },
    SupplierAddress:{
        type:String,
        required:true
    },
    SupplierEmail:{
        type: String,
        required: true
    },
    SupplierContactNumber:{
        type:String,
        required:true
    },
    CompanyWebsiteName:{
        type:String,
        required:true
    },
    TradingSince:{
        type:String,
        required:true
    },
    TypeOfBusiness:{
        type:String,
        required:true
    },
    PaymentMethod:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('suppliers',supplierSchema );



