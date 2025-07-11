
import React, { createContext, useState } from 'react'
import all_product from '../../Assets/all_product'

export const ShopContext = createContext(null)

// Add to cart function
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;

    }
    return cart;

}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    // Add to cart function
    const addToCart = (itemId) => {

        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems)
    }
// Remove to cart function
    const removefromCart = (itemId) => {

        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartItem = () => {
        let TotalItem = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
              
                TotalItem +=  cartItems[item]



            }
            


        }
        return TotalItem
    }

    const getTotalAmount = () => {
        let TotalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let ItemInfor = all_product.find((product) => product.id === Number(item))
                TotalAmount += ItemInfor.new_price * cartItems[item]



            }
          


        }
        return TotalAmount
    }

    const contextValue = {getTotalCartItem,getTotalAmount,all_product, cartItems, addToCart, removefromCart }


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider