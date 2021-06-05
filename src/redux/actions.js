export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user,
    }
}

export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item,
    }
}
