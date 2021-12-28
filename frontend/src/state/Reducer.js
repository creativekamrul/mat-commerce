import { ADD_PRODUCT_TO_CART, REMOVE_ITEMS_FROM_CART, UPDATE_CART_TOTAL_PRICE, REMOVE_ALL_CART_ITEMS } from "./Actions"
const MainReducer  = (state, action) => {
    if(action.type === ADD_PRODUCT_TO_CART)
    {
        return {
            ...state,
            cartItems: [...state.cartItems, action.payload]
        }
    }
    if(action.type === REMOVE_ITEMS_FROM_CART){
        const removeSingleProduct = (data, payload) => {
           const newItems = []
           const matchedProducts = []
           const unMatchedProducts= []
           data.map((e)=>{
            if(e.id === payload.id){
                matchedProducts.push(e)
            }
            if(e.id !== payload.id){
                unMatchedProducts.push(e)
            }
           })
           if(matchedProducts.length >= 1){
            matchedProducts.pop()
           }
           newItems.push(...matchedProducts, ...unMatchedProducts)

           return newItems
        }
        const newCartItems = removeSingleProduct(state.cartItems, action.payload)

        return {
            ...state,
            cartItems : newCartItems
        }
    }
    if(action.type === UPDATE_CART_TOTAL_PRICE){
        const getTotalPrice = () =>{
            var totalPrice = 0
            state.cartItems.map((e)=>{
                totalPrice += e.price
            })
            return totalPrice
        } 
        return {
            ...state,
            cartTotalPrice: getTotalPrice()
        }
    }
    if(action.type === REMOVE_ALL_CART_ITEMS){
        return{
            ...state,
            cartItems: []
        }

    }
    return state
}
export default MainReducer