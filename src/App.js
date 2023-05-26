import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Layout/Meals";

import Cart from "./components/Layout/Cart";
function App() {
  return (
    <Fragment>
      <Cart></Cart>
      <Header></Header>
      <main>
     <Meals></Meals>
     </main>
    </Fragment>
  );
}

export default App;
