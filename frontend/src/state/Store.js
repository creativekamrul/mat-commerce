import { MainContext } from './Context'
import { useEffect, useReducer } from 'react'
import MainReducer from './Reducer'
import { ADD_PRODUCT_TO_CART, REMOVE_ITEMS_FROM_CART, UPDATE_CART_TOTAL_PRICE, REMOVE_ALL_CART_ITEMS } from './Actions'
import {Products} from '../MockData'
const Store = ({ children }) => {
    const getCartItem = () =>{
        const cartData = localStorage.getItem("cartitems")
        if(cartData){
            return JSON.parse(localStorage.getItem("cartitems"))
        }else{
            return []
        }
    }
    const getTotalAmmount = () => {
        const cartData = localStorage.getItem("cartitems")
        if(cartData){
                var totalPrice = 0
            JSON.parse(localStorage.getItem("cartitems")).map(e=>{
                totalPrice += e.price
            })
            return totalPrice
        }
    }
    const defaultState = {
        products: Products,
        cartItems: getCartItem(),
        cartTotalPrice: getTotalAmmount(),

    }

    const [state, dispatch] = useReducer(MainReducer, defaultState)

    useEffect(()=>{
        localStorage.setItem("cartitems", JSON.stringify(state.cartItems))
    }, [state.cartItems, state.cartTotalPrice])

    const addProductToCart = (product) => {
        dispatch({type: ADD_PRODUCT_TO_CART, payload: {...product}})
        dispatch({type: UPDATE_CART_TOTAL_PRICE})

    }
    const buyNow = (product)=> {
        dispatch({type: ADD_PRODUCT_TO_CART, payload: {...product}})
        dispatch({type: UPDATE_CART_TOTAL_PRICE})
        setTimeout(()=>{
            window.location.href = "http://localhost:3000/cart"
        }, 1000)
    }
    const addMoreItem = (product) =>{
        dispatch({type: ADD_PRODUCT_TO_CART, payload: {...product}})
        dispatch({type: UPDATE_CART_TOTAL_PRICE})
    }
    const removeItemFromCart = (product) => {
        dispatch({type: REMOVE_ITEMS_FROM_CART, payload: {...product}})
        dispatch({type: UPDATE_CART_TOTAL_PRICE})
    }
    const removeAllCartItems = () => {
        dispatch({type: REMOVE_ALL_CART_ITEMS})
    }

    return (
        <MainContext.Provider value={{
            cartItems : state.cartItems,
            products: state.products,
            cartTotalPrice: state.cartTotalPrice,
            addProductToCart,
            buyNow,
            addMoreItem,
            removeItemFromCart,
            removeAllCartItems
        }}>
                {children}
        </MainContext.Provider>
    )
}

export default Store
