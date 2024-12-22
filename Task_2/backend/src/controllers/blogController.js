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

module.exports = {getSampleBlogs}