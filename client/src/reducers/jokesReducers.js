export default (jokes = [], action) => {

    switch (action.type) {
        case 'FETCH_JOKES':
            return action.payload; //actual jokes
    
        default:
            return jokes;
    }

}