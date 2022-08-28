import axios from "axios";

const url = 'https://marqably-react.herokuapp.com/posts';
//const jokeUrl ='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit'

export const fetchPosts = () => axios.get(url);
//export const fetchJokes = () => axios.get(jokeUrl);

//newPost as callback func
//After we get Post: specify url & data for sending "newPost"
//Then go to actions
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);



//export const showJoke = (newJoke) => axios.get(jokeUrl, newJoke);