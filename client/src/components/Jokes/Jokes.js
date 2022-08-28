import React, { useState } from "react";
import useFetch from "../Jokes/useFetch.js";
//import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper, CircularProgress, Grid } from "@material-ui/core";



const Jokes = () => {
    const { data: joke, loading, error, refetch } = useFetch(
        "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
      );
    
      if (loading) return <h1> Loading...</h1>;
    
      if (error) console.log(error); 
    
     /* Returning dynamic information retrieving from the Backend */
      return (
        <div className="App">

          
        
    
        <Typography variant="h4" component="h2"> {joke?.setup} </Typography>
        <Typography variant="h5" component="h2">{joke?.delivery} </Typography>
    
          <h5>{joke?.category}</h5>
    
          <button className="btn" onClick={refetch}> Another One!</button>
        </div>
      );
}

export default Jokes;