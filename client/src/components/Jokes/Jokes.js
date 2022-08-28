import React, { useState } from "react";
import useFetch from "../Jokes/useFetch.js";
//import { useDispatch } from "react-redux";
import { TextField, Container, Button, Typography, Paper, CircularProgress, Grid } from "@material-ui/core";

import useStyles from "../Posts/styles.js";

const Jokes = () => {
  const classes = useStyles();

    const { data: joke, loading, error, refetch } = useFetch(
      
        "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
      );
    
      if (loading) return <Typography variant="h4" component="h1"> Loading... </Typography>;
    
      if (error) console.log(error); 
    
     /* Returning dynamic information retrieving from the Backend */
      return (
        <Container>

          
        
    
        <Typography variant="h4" component="h2"> {joke?.setup} </Typography>
        <Typography variant="h5" component="h2">{joke?.delivery} </Typography>
        <Typography className={classes.pos} variant="h5" component="h2">{joke?.category} </Typography>
    
    
          <Button variant="contained" color="primary" size="large" className="btn" onClick={refetch}> Another One!</Button>
        </Container>
      );
}

export default Jokes;