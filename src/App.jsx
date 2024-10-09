import React from "react";
import ProductsList from "./Product";
import Basket from "./Basket";

const App = () => {
  return (
    <div className="flex ">
      <ProductsList />
      <Basket />
    </div>
  );
};

export default App;
