import React, { useState } from "react";
//import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { showJoke } from "../../actions/jokesActions";

import { useSelector } from "react-redux";

const Jokes = ({ showJoke }) => {

    const jokes = useSelector((state) => state.jokes);
    console.log(jokes);

    return (
        <div>
            <Typography variant="h2">Jokes</Typography>


            <Typography variant="h3">
                {showJoke?.setup}
            </Typography>


            <Typography variant="h3">
                {showJoke?.delivery}
            </Typography>




        </div>


    )
}

export default Jokes;