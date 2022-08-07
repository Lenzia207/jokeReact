import React, {useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import { useDispatch } from 'react-redux';


import { getPosts } from './actions/postsActions.js'
import Posts from './components/Posts/PostsComponent.js';
import Form from './components/Form/FormComponent.js';
import Jokes from './components/Jokes/JokesComponent.js';
import useStyles from './styles.js'


const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch(); //hook dispatch

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <Container maxidth="lg" >

            <Grid item xs={12} sm={4} className={classes.root}>
                <Jokes />
            </Grid>

            <Typography variant="h6"> Or submit your own Jokes </Typography>

            <Grid className={classes.root}>
                
                <Grid item xs={6} sm={7}>
                    <Posts setCurrentId = {setCurrentId}/>
                </Grid>


                <Grid item xs={6} sm={4}>
                    <Form currentId={currentId} setCurrentId = {setCurrentId} />
                </Grid>


            </Grid>


        </Container>
    );
}

export default App;