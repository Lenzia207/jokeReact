import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


import useStyles from "../styles.js";


//fetch data from global redux store by selectors
const Post = ({post, setCurrentId}) => {

    const classes = useStyles();

    //get acces to global redux store /state
    //To know why its (in this case) called posts, check reducers/index.js
    /* const posts = useSelector((state) => state.posts);
    console.log(posts); */
    return(
        <div className={classes.card}>
            <div> {post.setup} {post.delivery} </div>

            <div>
                <Typography variant="h6"> {post.creator}</Typography>
                <Typography variant="h4"> {post.category}</Typography>
            </div>

            <CardActions>
                <Button size="small" color="primary" onClick={() => {}}> 
                <ThumbUpAltIcon fontSize="small"> </ThumbUpAltIcon>
                
                </Button>
                <Button size="small" color="primary" onClick={() => {}}>
                    <DeleteIcon fontSize="small"> </DeleteIcon>
                    Delete
                </Button>

                <Button size="small" color="primary" onClick={() => setCurrentId(post._id)}>
                    <EditIcon fontSize="small"> </EditIcon>
                    Edit
                </Button>

            </CardActions>
        </div>

    )
}

export default Post;