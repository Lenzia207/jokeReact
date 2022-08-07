import mongoose from "mongoose";
import PostJoke from "../models/postJokes.js";

export const getPosts = async (req, res) =>{
  
    try {
        const postJoke = await PostJoke.find();
        res.status(200).json(postJoke);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

export const createPost =  async (req, res) =>{
    console.log(req.body, "LENZIA_body_sent");

    const joke = req.body;
    const newJoke = new PostJoke(joke);

    try {
       await newJoke.save();
       res.status(201).json(newJoke);
        
    } catch (error) {
        res.status(409).json({message: error.message});
        
    }
};

export const updatePost = async(req, res) => {
    console.log(req.body, "LENZIA2_body_sent");
    const { id: _id } = req.params; //check the id
    
    const post = req.body //sent from the frontend

    //check if this id is not (!) valid
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that creator ID")

    //if it's valid then update Post
    //Since its async, apply await 
    //Specify {new: true} to receive updated version of the Post
    const updatedPost = await PostJoke.findByIdAndUpdate(_id, post, {new: true})
    
    //send over the updated Post
    res.json(updatedPost);
}