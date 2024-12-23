const Blogs = require("../models/blogSchema");
const sampleBlog = require("../models/sampleBlogSchema");

const getSampleBlogs =async(req,res)=>{
    try {
        const allsampleBlogs = await sampleBlog.find({}) ;
        console.log(allsampleBlogs) 
        return res.status(200).json({message:"All sample blogs found" , 
            allSampleBlogs : allsampleBlogs
        })

    } catch (error) {
        console.log(error)
    }
}

const createBlog  = async(req, res)=>{
    try {
        const {name, title , story , description , image , authorImage , postedOn , tags} = req.body ; 

        const newBlog = new Blogs({
            name, title , story , description , image , authorImage , postedOn,tags
        });

        await newBlog.save();

        return res.status(201).json({
            message: 'Blog post created successfully',
            blog: newBlog
        });

    } catch (error) {
        console.log(error)
    }
}

module.exports = {getSampleBlogs,createBlog}