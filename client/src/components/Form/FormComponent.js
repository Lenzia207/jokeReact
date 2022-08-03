import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
//import { createPost } from "../../api";

import useStyles from './styles.js'
import { createPost } from "../../actions/postsActions.js";

const Form = () => {

    const classes = useStyles();

    //in this Object specify properties that the Object is goint to start with 
    const [postData, setPostData] = useState({
        creator: '', category: '', setup: '', delivery: ''
    })

    console.log(postData);
    //use dispatch actions
    const dispatch = useDispatch(); //declare dispatch in the submit event

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents reload in Browser

        //dispatch the action createPost (don't forget to import)
        dispatch(createPost(postData));
       
        

        //Once action is dispatched go to reducers/post

    }

    const clear = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form  autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h4">Submit Joke</Typography>

                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}></TextField>
                <TextField name="category" variant="outlined" label="Category" fullWidth value={postData.category} onChange={(e) => setPostData({ ...postData, category: e.target.value })}></TextField>
                <TextField name="setup" variant="outlined" label="Setup" fullWidth value={postData.setup} onChange={(e) => setPostData({ ...postData, setup: e.target.value })}></TextField>
                <TextField name="delivery" variant="outlined" label="Delivery" fullWidth value={postData.delivery} onChange={(e) => setPostData({ ...postData, delivery: e.target.value })}></TextField>

                <Button className= {classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

                <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>


            </form>


        </Paper>

    )
}

export default Form;