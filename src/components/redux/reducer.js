const initialState = {
    songs: []
};

const reducer = (state=initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'ADD_SONG_IN_LIST': 
            newState.songs = [];
            break;
        
        case 'REMOVE_SONG_FROM_LIST': 
            newState.songs = [];
            break;
    }
    return newState;
};

export default reducer;