const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({

    type:{
        type:String,
        required:true
    },

    name:{
        type:String,
        required:true

    },

    price:{
        type:Number,
        required:true
    },

    discription:{
        type:String,
        required:true
    },
});

module.exports = mongoose.model('Services' , serviceSchema)