import { createStore, combineReducers } from 'redux'
import { cartReducer } from './reducer/cartReducer'
import { productReducer } from './reducer/productReducer'
import { selectedReducer } from './reducer/selectedCartReducer'
const rootReducer = combineReducers({
    products: productReducer,
    carts: cartReducer,
    selectedProduct: selectedReducer
})

const store = createStore(rootReducer)
export default store;