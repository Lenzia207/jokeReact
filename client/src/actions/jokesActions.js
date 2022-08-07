import * as api from '../api';

/* export const showJoke = () => {
    return (dispatch) => {
        return api.fetchJokes()
        .then (response => response.json())
        .then(data => dispatch(
            { type: "FETCH_ALL", payload: data }))
        .catch(err => dispatch(
            { type: "ERROR", msg: "Unable to fetch data" }))
    }
} */

 export const showJokes = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchJokes();

        dispatch({ type: 'FETCH_ALL', payload: data });
        
    } catch (error) {
        console.log(error);
        
    }
} 