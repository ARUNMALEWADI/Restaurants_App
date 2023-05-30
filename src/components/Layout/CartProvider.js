import React, { useReducer, useRef } from 'react'
import Cartcontext from './Cart-context'
const defaultcartstate={
    items:[],
    totalAmount:0
};
const cartreducer=(state,action)=>{
  if(action.type==='ADD')
  {
    
    const updatedtotalamount=state.totalAmount+action.item.price*action.item.amount;
    const ExistingCartItemIndex=state.items.findIndex((item)=>item.id===action.item.id);
   
    const ExistingCartItem=state.items[ExistingCartItemIndex];
    let updatedItems;
    if(ExistingCartItem)
    { const updatedItem={
        ...ExistingCartItem,
        amount:ExistingCartItem.amount+action.item.amount
    };
    updatedItems=[...state.items]
    updatedItems[ExistingCartItemIndex]=updatedItem

    }
    else{
        updatedItems=state.items.concat(action.item)

    }
   
    
    return{
        items:updatedItems,
        totalAmount:updatedtotalamount
    }
  }
  if(action.type==='REMOVE')
    {  const ExistingCartItemIndex=state.items.findIndex((item)=>item.id===action.id);
        
    const ExistingCartItem=state.items[ExistingCartItemIndex];
    const updatedtotalamount=state.totalAmount-ExistingCartItem.price;   
    let updatedItems;
    if(ExistingCartItem.amount===1)
    { updatedItems=state.items.filter(item=>item.id!==action.id);
         
    }else{
        const updatedItem={...ExistingCartItem,amount:ExistingCartItem.amount-1}
        updatedItems=[...state.items];
        updatedItems[ExistingCartItemIndex]=updatedItem;
    }
    return{
        items:updatedItems,
        totalAmount:updatedtotalamount
    };
    }

}

const CartProvider = (props) => {
    const [cartState,dispatchaction]=useReducer(cartreducer,defaultcartstate)
    const additemHandler=(item)=>{
        dispatchaction({type:'ADD',item:item});
    }
    const removeitemHandler=id=>{
        dispatchaction({type:'REMOVE',id:id});
    }

    const helper={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
      additem:additemHandler,
      removeitem:removeitemHandler
    }
  return <Cartcontext.Provider value={helper}>
    {props.children}
  </Cartcontext.Provider>
}

export default CartProvider