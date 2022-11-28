// selected product state
const initState = {
    product: {},
}

// selected products action types
export const SELECTED_PRODUCT_CART = 'product/cart/selected/productId'

// selected reducer
export const selectedReducer = (state = initState, action) => {
    switch (action.type) {
        case SELECTED_PRODUCT_CART:
            return {
                ...state,
                product: action.payload.product
            }
        
        default:
            return state;
    }
}