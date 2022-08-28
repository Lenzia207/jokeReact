//Reducer is equal a function that accepts state (posts) and action 
//The function will be used in index.js of reducers
//Handle the logic of Posts
export default (posts = [], action) => {

    switch (action.type) {

        case 'DELETE':
            //Filter out the post that is being deleted
            return posts.filter((post) => post._id != action.payload)
        case 'UPDATE':
        case 'LIKE':
            //map --> single post id is equal action.payload._id (updated post) then return action.payload.
            //Otherwise : post --> return just the post as it was
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
            
        case 'FETCH_ALL':
            return action.payload; //actual posts

        case 'CREATE':
            //send array of post, in there spread posts (...posts) and add new post which is stored in action.payload
            return [...posts, action.payload]; 

        default:
            return posts;
    }

}