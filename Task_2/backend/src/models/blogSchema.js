const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true , 
    },
    email: {
        type: String,
        // required: true
    },
    title: {
        type: String,
        required: true
    },
    story: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    authorImage: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true,
        validate: [array => array.length > 0, 'At least one tag is required']
    },
    postedOn: {
        type: Date,
        default: Date.now,
        required: true
    }
}, { timestamps: true });


const Blogs = mongoose.model('Blogs', blogSchema);

module.exports = Blogs;
