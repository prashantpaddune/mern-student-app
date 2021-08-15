
const helper = (state, payload) => {
    // console.log('helper', state, payload);
    const index = state.findIndex(input => input._id === payload._id);
    state.splice(index, 1, payload);
    return state;
}

const remove = (state, payload) => {
    // console.log('helper', state, payload);
    return state.filter((input) => input._id !== payload)
}

const formReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...state, action.payload]; 
        case 'UPDATE':
            return helper(state, action.payload)   
        case 'DELETE':
            return remove(state, action.payload)
        default: 
            return state;
    }
}

export default formReducer;