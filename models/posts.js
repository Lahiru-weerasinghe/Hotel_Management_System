const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    feedbackType: String,
    serviceType: String,
    dayVisited: String,
    name: String,
    email: String,
    fMessage: String,
    rate: String
});
module.exports = mongoose.model('post',postSchema);