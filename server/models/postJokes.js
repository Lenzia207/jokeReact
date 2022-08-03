import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    creator: String,
    category: String,
    setup: String,
    delivery: String,
});

const PostJoke = mongoose.model('PostJoke', postSchema);
export default PostJoke;

//Exporting mongoose from the post joke file