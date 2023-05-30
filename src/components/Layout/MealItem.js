import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealitemForm from './MealitemForm';
import Cartcontext from './Cart-context';

function MealItem(props) {

   const cartcrtx= useContext(Cartcontext);
    const price =`$${props.price.toFixed(2)}`;


    const onAddToCartHandler=(amount)=>{

        cartcrtx.additem( {id:props.id,name:props.name,amount:amount,price:props.price})

    }

  return <li className={classes.meal}>
   
        <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
    </div>
    <div>
        <MealitemForm onAddToCart={onAddToCartHandler}></MealitemForm>
    </div>
  </li>

}

export default MealItem