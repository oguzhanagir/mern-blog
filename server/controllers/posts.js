import Post from "../models/posts.js";

export const getPosts = async (req,res) =>{
    try
    {
        const post = await Post.find();
        res.status(200).json(post);
    }
    catch (error)
    {
        res.status(404).json({
            message: error.message,
        });
    }   

};