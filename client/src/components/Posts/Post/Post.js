import React from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
//import { ThumbUpAltIcon } from "@material-ui/icons/ThumbUpAlt";
//import { DeleteIcon } from "@material-ui/icons";
//import { MoreHoriz } from "@material-ui/icons/MoreHoriz";

import useStyles from "../styles.js";


//fetch data from global redux store by selectors
const Post = () => {

    //get acces to global redux store /state
    //To know why its (in this case) called posts, check reducers/index.js
    /* const posts = useSelector((state) => state.posts);
    console.log(posts); */
    return(
        <h1>Post</h1>
    )
}

export default Post;