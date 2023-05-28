import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Layout/Meals";

import Cart from "./components/Layout/Cart";
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
    <Fragment>
      { cartIsShown&& <Cart onClose={hideCartHandler}/>
}
      <Header onShowCart={showCartHandler}></Header>
      <main>
     <Meals></Meals>
     </main>
    </Fragment>
  );
}

export default App;
