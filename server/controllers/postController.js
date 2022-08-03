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