const mongoose = require('mongoose');

const successStoriesSchema = new mongoose.Schema({
    story:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        contentType: String
    },
    name:{
        type: String,
        required: true,
    },
    designation:{
        type: String,
        required: true,
    }
})

const successStories = mongoose.model('successStories', successStoriesSchema)

module.exports = successStories