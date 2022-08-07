import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
//import { createPost } from "../../api";

import useStyles from './styles.js'
import { createPost, updatePost } from "../../actions/postsActions.js";

//GET THE CURRENT ID
const Form = ({currentId, setCurrentId}) => {
    //in this Object specify properties that the Object is goint to start with 
    const [postData, setPostData] = useState({
        creator: '', category: '', setup: '', delivery: ''
    })

    //fetching specific post
    //If we have currentId loop over state.posts --> find the post that has the same id as the currentId
    //Otherwise : null
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null );

    const classes = useStyles();
    //use dispatch actions
    const dispatch = useDispatch(); //declare dispatch in the submit event

    //populate values of the Form
    //if the post exit -->  setPostData 
    useEffect(() => {
        if(post) setPostData(post);

        console.log(post, 'Lenzia1');
    }, [post])

    

    const handleSubmit = (e) => {
        e.preventDefault(); //prevents reload in Browser

        //if the current ID is not null --> dispatch updatePost
        //with updatePost we need to know the ID
        if(currentId){
            dispatch(updatePost(currentId, postData))
        } else {
            //dispatch the action createPost (don't forget to import)
            dispatch(createPost(postData));
        }

         clear();

        //Once action is dispatched go to reducers/post

    }

    const clear = () => {
        setCurrentId(null);
        setPostData({creator: '', category: '', setup: '', delivery: ''});

    }
    return (
        <Paper className={classes.paper}>
            <form  autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h4">{ currentId ? 'Edit' : 'Submit'} Joke</Typography>

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