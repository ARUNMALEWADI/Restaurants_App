
import classes from './CartButton.module.css'
import CartIcon from './CartIcon';
import Cartcontext from './Cart-context';
import { useContext } from 'react';
const CardButton=(props)=>{
    const context=useContext(Cartcontext)
    const numberofCartItems=context.items.reduce((crnumber,item)=>{
        return crnumber+item.amount;
    },0)

return <button className={classes.button} onClick={props.onClick}>
<span className={classes.icon}><CartIcon></CartIcon></span>
<span >Cart</span>
<span className={classes.badge}>{numberofCartItems}</span>
</button>
}
export default CardButton;