import axios from "axios";

const url = 'http://localhost:5000/posts';
const jokeUrl ='https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit'

export const fetchPosts = () => axios.get(url);
export const fetchJokes = () => axios.get(jokeUrl);

//newPost as callback func
//After we get Post: specify url & data for sending "newPost"
//Then go to actions
export const createPost = (newPost) => axios.post(url, newPost);
export const showJoke = (newJoke) => axios.get(jokeUrl, newJoke);