import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from './Modal'
import Cartcontext from './Cart-context'
import CartItem from './CartItem'
function Cart(props) {
    const crx=useContext(Cartcontext)
   
   const totalAmount=crx.totalAmount;

    const hasItems=crx.items.length>0;
    const CartitemRemoveHandler=id=>{
        crx.removeitem(id);

    }
    const CartitemAddHandler = item=>{
        crx.additem({...item,amount:1});
    }
    const cartitems=<ul className={classes['cart-items']}>
        {crx.items.map((item)=>(<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}  onRemove={CartitemRemoveHandler.bind(null,item.id)} onAdd={CartitemAddHandler.bind(null,item)}></CartItem>))}  
        </ul>
  return <Modal onClose={props.onClose}>
       {cartitems}
    <div className={classes.total}>
        <span>Total Amount</span>
        <span>{crx.totalAmount}</span>
    </div>
    <div className={classes.actions}>
        {hasItems&&<button className={classes.button}>Order</button>}
        <button className={classes['button--alt']} onClick={props.onClose}>close</button>
    </div>
    </Modal>


}

export default Cart