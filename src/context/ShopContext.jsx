import React, { createContext, useEffect, useState } from 'react';
import { backend_url } from '../server';
// import all_products from '../assets/all_products';


const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0
    }
    return cart
}



export const ShopContext = createContext(null)

const ShopContextProvider = (props) => {


    const [all_products, setall_products] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart())


    useEffect(() => {
        fetch(`${backend_url}/allproduct`).then((res) => res.json()).then((data) => setall_products(data))
        if (localStorage.getItem('auth-token')) {
            fetch(`${backend_url}/getcart`, {
                method: "POST",
                headers:{
                    Accept: 'application/form-data',
                    "auth-token": `${localStorage.getItem('auth-token')}`,
                    "Content-Type": 'application/json'
                },
                body: "",
            }).then((res) => res.json()).then((data) => setCartItems(data))
        }
    }, [])

    
    // console.log(cartItems);
    
    const addToCart = (itemId) => {
        setCartItems((prev) =>({...prev, [itemId]:prev[itemId]+1}))
        // console.log(cartItems);
        if (localStorage.getItem('auth-token')) {
            fetch(`${backend_url}/addtocart`, {
                method: "POST",
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"itemId": itemId})
            }).then((res) => res.json()).then((data) => console.log(data))
        }
        
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev, [itemId]:prev[itemId]-1}))
        if (localStorage.getItem('auth-token')) {
            fetch(`${backend_url}/removefromcart`, {
                method: "POST",
                headers:{
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"itemId": itemId})
            }).then((res) => res.json()).then((data) => console.log(data))
        }
    }

    // this function responsible for add all amount for add to cart items

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for(const item in cartItems){
            if (cartItems[item]>0) {
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount;
    }


    // this function res for how many product avalavile in add to cart 
    const getTotalCartItems = () => {
        let totalItem = 0
        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItem += cartItems[item]
            }
        }
        return totalItem
    }
    
    const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems }
  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
