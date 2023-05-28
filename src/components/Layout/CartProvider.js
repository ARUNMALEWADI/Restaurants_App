import React from 'react'
import Cartcontext from './Cart-context'

const CartProvider = (props) => {
    const additemHandler=(item)=>{}
    const removeitemHandler=id=>{}

    const helper={
        items:[],
        totalamount:0,
      additem:additemHandler,
      removeitem:removeitemHandler
    }
  return <Cartcontext.Provider value={helper}>
    {props.children}
  </Cartcontext.Provider>
}

export default CartProvider