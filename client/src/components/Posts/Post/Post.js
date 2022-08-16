import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Paper, Container } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from "react-redux";


import useStyles from "../styles.js";
import { deletePost } from "../../../actions/postsActions.js";


//fetch data from global redux store by selectors
const Post = ({ post, setCurrentId }) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    //get acces to global redux store /state
    //To know why its (in this case) called posts, check reducers/index.js
    /* const posts = useSelector((state) => state.posts);
    console.log(posts); */
    return (
        <Container /* className={classes.card} */>
                <Typography className={classes.title} variant="subtitle1" color="textSecondary"> - {post.creator}</Typography>
                <Typography variant="h4" component="h2"> {post.setup} </Typography>
                <Typography variant="h5" component="h2">{post.delivery} </Typography>
                <Typography className={classes.pos} variant="subtitle1" color="textSecondary"> {post.category}</Typography>
            


             
                <Button size="small" color="primary" onClick={() => { }}>
                    <ThumbUpAltIcon fontSize="small"> </ThumbUpAltIcon>
                </Button>

                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small"> </DeleteIcon>
                    Delete
                </Button>

                <Button size="small" color="primary" onClick={() => setCurrentId(post._id)}>
                    <EditIcon fontSize="small"> </EditIcon>
                    Edit
                </Button>
        

        </Container>

    )
}

export default Post;