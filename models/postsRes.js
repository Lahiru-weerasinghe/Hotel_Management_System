const mongoose = require('mongoose');

const postSchemaRes = new mongoose.Schema({
    Name:{
        type:String,
        required: true
    },
    ID:{
        type:String,
        required: true
    },
    Phone_No:{
        type:String,
        required: true
    },
    Check_In:{
        type:String,
        required: true
    },
    Check_Out:{
        type:String,
        required: true
    },
    No_Of_Rooms:{
        type:String,
        required: true
    }

});

module.exports = mongoose.model('Room_Reservations',postSchemaRes);