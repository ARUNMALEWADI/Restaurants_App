import { Fragment, useContext } from 'react';
import classes from './Header.module.css'
import MealsImg from './../../assets/meals.jpg'
import CardButton from './CartButton';

const Header =(props)=>{
   
return <Fragment>
    <header className={classes.header}>
        <h1>ReactMeals </h1>
        <CardButton onClick={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
        <img src={MealsImg} alt='A table full of delicious food!'></img>
    </div>

</Fragment>
}
export default Header;