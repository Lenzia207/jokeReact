import * as api from '../api';

//Action Creates that return actions
//actions must have type property and payload (where we store posts)
//Use redux thunk to inhere adittional arrow funtion --> A function that returns another function
//instead of return the function --> "dispatch()" it 
export const getPosts = () => async (dispatch) => { 
    
    //fetch all the data from the api
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
        
    } catch (error) {
        console.log(error.message);
    }

}



export const createPost = (post) => async (dispatch) => {
    console.log(post, "LENZIA");
    
    try {
        //get Data, make api request
        const { data } = await api.createPost(post)

        //dispatch an action 
        dispatch({ type: 'CREATE', payload: data });
        
    } catch (error) {
        console.log(error.message);
    } 



    //After go to Forms where we want to create a Post make connection for dispatching (useDispatch)
}

