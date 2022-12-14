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
    const { id: _id } = req.params; //check the id
    
    const post = req.body //sent from the frontend

    //check if this id is not (!) valid
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that creator ID")

    //if it's valid then update Post
    //Since its async, apply await 
    //Specify {new: true} to receive updated version of the Post
    //{ ...post, id } --> spread all properties of this object and also pass in id
    const updatedPost = await PostJoke.findByIdAndUpdate(_id, { ...post, _id },  {new: true})
    
    //send over the updated Post
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params; //check the id

    //check if this id is not (!) valid
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No ID found")

    await PostJoke.findByIdAndDelete(id);

    res.json({ message: 'Post was DELETED'});
}

export const likePost = async(req, res) => {
    const { id } = req.params; //check the id
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No ID found") //check if this id is not (!) valid

    const post = await PostJoke.findById(id);
    const updatedPost = await PostJoke.findByIdAndUpdate(id, {likeCount: post.likeCount + 1 }, {new: true})
    
    res.json(updatedPost);

    


}