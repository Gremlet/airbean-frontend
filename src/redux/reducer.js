const initialState = {
    currentUser: {},
    cart: [],
    total: 0,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                currentUser: action.payload,
            }
        case 'ADD_TO_CART':
            let addedItem = action.payload
            let existingItem = state.cart.find((item) => item.id === addedItem.id)
            if (existingItem) {
                existingItem.quantity = existingItem.quantity + 1
                return {
                    ...state,
                    cart: [...state.cart],
                    total: state.total + addedItem.price,
                }
            } else {
                addedItem.quantity = 1
                let newTotal = state.total + addedItem.price
                return {
                    ...state,
                    cart: [...state.cart, addedItem],
                    total: newTotal,
                }
            }

        default:
            return state
    }
}

/** APPLY_DISCOUNT
 *
 * if cart includes 1 and 7 && if 1.qty === 7.qty discount === 21 * qty =>
 * if 1.qty > 7.qty discount === 21 * 7.qty
 * if 7.qty > 1.qty discout === 21 * 1.qty
 *
 * Also need  INCREMENT_ITEM and DECREMENT_ITEM and REMOVE_ITEM*/

export default userReducer
