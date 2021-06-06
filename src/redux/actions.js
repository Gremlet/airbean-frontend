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
