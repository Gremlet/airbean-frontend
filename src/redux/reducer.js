const initialState = {
    currentUser: {},
    cart: [],
    total: 0,
    discount: 0,
}

const airbeanReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                currentUser: action.payload,
            }

        case 'LOGOUT':
            return {
                ...state,
                currentUser: {},
                cart: [],
                total: 0,
                discount: 0,
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
        case 'INCREMENT_ITEM':
            let incrementItem = state.cart.find((item) => item.id === action.payload.id)
            incrementItem.quantity = incrementItem.quantity + 1
            let incTotal = state.total + incrementItem.price
            return {
                ...state,
                total: incTotal,
            }

        case 'DECREMENT_ITEM':
            let decrementItem = state.cart.find((item) => item.id === action.payload.id)
            if (decrementItem.quantity === 1) {
                let remainingItems = state.cart.filter((item) => item.id !== action.payload.id)
                let decTotal = state.total - decrementItem.price
                return {
                    ...state,
                    cart: remainingItems,
                    total: decTotal,
                }
            } else {
                decrementItem.quantity = decrementItem.quantity - 1
                let decTotal = state.total - decrementItem.price
                return {
                    ...state,
                    total: decTotal,
                }
            }

        case 'REMOVE_ITEM':
            let itemToRemove = state.cart.find((item) => item.id === action.payload.id)
            let remainingItems = state.cart.filter((item) => item.id !== action.payload.id)
            let newTotal = state.total - itemToRemove.price * itemToRemove.quantity

            return {
                ...state,
                cart: remainingItems,
                total: newTotal,
            }

        case 'CHECK_DISCOUNT':
            let bryggkaffe = state.cart.find((item) => item.id === 1)
            let bakelse = state.cart.find((item) => item.id === 7)

            if (bryggkaffe && bakelse && bryggkaffe.quantity === bakelse.quantity) {
                let discount = 21 * bryggkaffe.quantity

                return {
                    ...state,
                    cart: [...state.cart],
                    discount: discount,
                }
            }
            if (bryggkaffe && bakelse && bryggkaffe.quantity > bakelse.quantity) {
                let discount = 21 * bakelse.quantity
                return {
                    ...state,
                    cart: [...state.cart],
                    discount: discount,
                }
            }
            if (bryggkaffe && bakelse && bryggkaffe.quantity < bakelse.quantity) {
                let discount = 21 * bryggkaffe.quantity
                return {
                    ...state,
                    cart: [...state.cart],
                    discount: discount,
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart],
                    discount: 0,
                }
            }

        case 'EMPTY_CART':
            return {
                ...state,
                cart: [],
                total: 0,
                discount: 0,
            }

        default:
            return state
    }
}

/** APPLY_DISCOUNT
 *
 * if cart includes 1 and 7 && if 1.qty === 7.qty discount = 21 * qty
 * if 1.qty > 7.qty discount = 21 * 7.qty
 * if 7.qty > 1.qty discout = 21 * 1.qty
 *
 * Also need  INCREMENT_ITEM and DECREMENT_ITEM and REMOVE_ITEM*/

export default airbeanReducer
