const successStories = require("../models/successStories");

const getSuccessStories =async(req,res)=>{
    try {
        const allsuccessStories = await successStories.find({}) ;
        console.log(allsuccessStories) 
        return res.status(200).json({message:"All success stories found" , 
            allSuccessStories : allsuccessStories
        })

    } catch (error) {
        console.log(error)
    }
}

module.exports = {getSuccessStories}