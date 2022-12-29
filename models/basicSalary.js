const mongoose = require('mongoose');

const basicSalarySchema = new mongoose.Schema({

    //properties
    designation:{
        type: String,
        // required: true
    },
    level:{
        type: String,
        // required: true
    },
    date:{
        type: String,
        //default: Date.now, //.toLocaleDateString
        // required: true
    },
    amount:{
        type: Number,
        // required: true
    }

});

module.exports = mongoose.model('BasicSalary', basicSalarySchema)
//will be used in routes for the functions which use DB         