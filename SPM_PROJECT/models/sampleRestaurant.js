const mongoose = require('mongoose');

const postrsSchema = new mongoose.Schema({

    menue:{
        type:String,
        require:true 
    },

    name:{
        type:String,
        require:true 
    },

    address:{
        type:String,
        require:true 
    },
    
    mobile:{
        type:String,
        require:true 
    },

    date:{
        type:String,
        require:true 
    },
    
    aguest:{
        type:String,
        require:true 
    },

    cguest:{
        type:String,
        require:true 
    },

    notes:{
        type:String,
        require:true 
    },

    cardname:{
        type:String,
        require:true 
    },

    cno:{
        type:String,
        require:true 
    },

    expdate:{
        type:String,
        require:true 
    },

    cvv:{
        type:String,
        require:true 
    },
});

module.exports = mongoose.model('Postsrs',postrsSchema)