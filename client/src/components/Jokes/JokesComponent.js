import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper, CircularProgress } from "@material-ui/core";
import { showJoke } from "../../actions/jokesActions";

import { useSelector } from "react-redux";

const Jokes = ({ showJoke }) => {

    const jokes = useSelector((state) => state.jokes);
    console.log(jokes);

    return (

        !jokes.length ? <CircularProgress /> : (
        <div>
            <Typography variant="h2">Jokes</Typography>


            <Typography variant="h3">
                {jokes?.setup}
            </Typography>


            <Typography variant="h3">
                {jokes?.delivery}
            </Typography>




        </div>

        )


    )
}

export default Jokes;