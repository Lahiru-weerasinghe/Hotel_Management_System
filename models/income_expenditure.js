const mongoose = require('mongoose');

const income_expenditureSchema = new mongoose.Schema({

    //properties
    title: {
        type: String,
        // required: true
    },
    type: {
        type: String,
        // required: true
    },
    description: {
        type: String
    },
    transaction_date: {
        type: Date,
        default: Date.now,
        // required: true
    },
    amount: {
        type: Number,
        // required: true
    }

});

module.exports = mongoose.model('Income_Expenditure', income_expenditureSchema)