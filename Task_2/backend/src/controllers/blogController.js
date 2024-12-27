const Blogs = require("../models/blogSchema");
const sampleBlog = require("../models/sampleBlogSchema");

const getSampleBlogs =async(req,res)=>{
    try {
        const allsampleBlogs = await sampleBlog.find({}) ;
        // console.log(allsampleBlogs) 
        return res.status(200).json({message:"All sample blogs found" , 
            allSampleBlogs : allsampleBlogs
        })

    } catch (error) {
        console.log(error)
    }
}

const createBlog  = async(req, res)=>{
    try {
        // console.log(req.body)
        const {name, title , story , description , image , authorImage , postedOn , tags , email} = req.body ; 

        const newBlog = new Blogs({
            name, title , story , description , image , authorImage , postedOn,tags , email 
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

const getYourBlog = async (req, res) => {
try {
    const email = req.body.email

    const yourBlog = await Blogs.find({email})

    return res.status(201).json({
        message: 'Your blogs found successfully',
        yourBlog: yourBlog
    });


} catch (error) {
    console.log(error)
}
}


const getAllBlogs = async (req, res) => {
try {
    const allBlogs = await Blogs.find({})
    return res.status(201).json({
        message: 'All blogs found successfully',
        allBlogs: allBlogs
    });
} catch (error) {
    console.log(error)
}
}

module.exports = {getSampleBlogs,createBlog , getYourBlog,getAllBlogs}