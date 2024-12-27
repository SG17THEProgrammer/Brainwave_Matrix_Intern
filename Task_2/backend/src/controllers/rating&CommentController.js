const Blogs = require("../models/blogSchema");

const rating = async(req,res)=>{
    try {
        const {blogId ,rating } =req.body 

        const blog = await Blogs.findByIdAndUpdate(blogId)
        
          if (!blog) {
            return res.status(404).json('Blog not found');
          }
      
          blog.rating.push(rating);
        await blog.save();
      
            return res.status(200).json({
              message: 'Post rated successfully',
              blog,
            });
          
    } catch (error) {
        console.log(error);
    }
}

const comment=async(req, res)=>{
    try {
        console.log(req.body)
        const { comments, blogId} = req.body;
        const {author, userImage, text } = comments

        if (!author || !userImage || !text) {
            return res.status(400).json({ message: 'Author, user image, and text are required' });
          }

          const blog = await Blogs.findById(blogId);
    
          if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
          }
          
          if (!blog.comments) {
            blog.comments = [];  
          }

          const newComment = {
            author,
            userImage,
            text
          };
      
          blog.comments.push(newComment);
      
          await blog.save();
      
          res.status(200).json({
            message: 'Comment added successfully',
            blog
          });
      
    } catch (error) {
        console.log(error)
    }
}
module.exports ={rating,comment}