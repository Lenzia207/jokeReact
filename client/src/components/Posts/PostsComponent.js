import { CircularProgress, Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux"; //fetch data from global redux store

//import useStyles from'./styles.js'
import Post from "./Post/Post.js";

const Posts = ({ setCurrentId }) => {

    const posts = useSelector((state) => state.posts);

    return(
        
        !posts.length ? <CircularProgress /> : (
            <Grid>
                {/* Send individual value of apost with each post component */}
                {posts.map((post) => (
                    <Grid key={post._id} item  xs={12} sm={30} >
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}

            </Grid> 

        )
        
        
        
    )
}

export default Posts;