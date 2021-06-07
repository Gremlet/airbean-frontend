export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user,
    }
}

export const addToCart = (id, title, price, quantity) => {
    return {
        type: 'ADD_TO_CART',
        payload: { id, title, price, quantity },
    }
}

export const increment = (id, quantity, price) => {
    return {
        type: 'INCREMENT_ITEM',
        payload: { id, quantity, price },
    }
}

export const decrement = (id, quantity, price) => {
    return {
        type: 'DECREMENT_ITEM',
        payload: { id, quantity, price },
    }
}

export const removeItem = (id, quantity, price) => {
    return {
        type: 'REMOVE_ITEM',
        payload: { id, quantity, price },
    }
}

export const checkDiscount = () => {
    return {
        type: 'CHECK_DISCOUNT',
    }
}

export const getLatestOrder = (order) => {
    return {
        type: 'GET_LATEST_ORDER',
        payload: order,
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART',
    }
}
