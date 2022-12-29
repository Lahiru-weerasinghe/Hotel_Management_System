const mongoose = require('mongoose');

const requestSchema  = new mongoose.Schema({
    name : {
        type : String,
        required: true
      },
    nic : {
        type : String,
        required: true
      },
    request : {
        type : String,
        required: true
      }
});

module.exports = mongoose.model('Requests',requestSchema);