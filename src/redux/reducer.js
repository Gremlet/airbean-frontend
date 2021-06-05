const initialState = {
    currentUser: {},
    cart: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                currentUser: action.payload,
            }
        default:
            return state
    }
}

export default userReducer
