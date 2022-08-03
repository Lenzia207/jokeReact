export default (jokes = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; //actual jokes
    
        default:
            return jokes;
    }

}