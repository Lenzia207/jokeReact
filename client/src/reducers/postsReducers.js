//Reducer is equal a function that accepts state (posts) and action 
//The function will be used in index.js of reducers
//Handle the logic of Posts
export default (posts = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; //actual posts

        case 'CREATE':
            //send array of post, in there spread posts (...posts) and add new post which is stored in action.payload
            return [...posts, action.payload]; 
    
        default:
            return posts;
    }

}