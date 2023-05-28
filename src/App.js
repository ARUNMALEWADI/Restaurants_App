import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Layout/Meals";
import Cart from "./components/Layout/Cart";
import CartProvider from "./components/Layout/CartProvider";
function App() {
  const [cartIsShown ,setCartIsShown] =useState()

  const showCartHandler=()=>
  {
    setCartIsShown(true)
  }
  const hideCartHandler=()=>
  {
    setCartIsShown(false)
  }
  return (
    <CartProvider>
      { cartIsShown&& <Cart onClose={hideCartHandler}/>
}
      <Header onShowCart={showCartHandler}></Header>
      <main>
     <Meals></Meals>
     </main>
     </CartProvider>
  );
}

export default App;
