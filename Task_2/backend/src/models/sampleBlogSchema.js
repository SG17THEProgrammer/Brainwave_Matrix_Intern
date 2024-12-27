const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: {
      type: String,
      required: true,
    },
    userImage: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  });

const sampleBlogSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  userImage: {
    type: String,
    required: true,
  },
  media: {
    type: String,
    required: true,
  },
  mediaType: {
    type: String,
    enum: ['image', 'video', 'audio'], 
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String], 
    required: true,
  },
  postedOn: {
    type: Date,
    required: true,
  },
  comments: {
    type: [commentSchema], 
    default: [],
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
})

const sampleBlog = mongoose.model('sampleBlog', sampleBlogSchema);

module.exports = sampleBlog;