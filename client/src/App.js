import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Paper } from '@material-ui/core'
import { useDispatch } from 'react-redux';


import { getPosts } from './actions/postsActions.js'
import Posts from './components/Posts/PostsComponent.js';
import Form from './components/Form/FormComponent.js';
import Jokes from './components/Jokes/Jokes.js';
import useStyles from './styles.js'


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch(); //hook dispatch

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])

    return (
        <Container maxidth="lg" >

            <Grid item xs={12} sm={4} className={classes.root}>
                <Jokes  />
            </Grid>

            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Posts setCurrentId={setCurrentId} />
            
            
        
        </Container>
    );
}

export default App;