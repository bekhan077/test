import React from "react";
import { Sitebar } from "./components";
import { Home } from "./components";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="flex">
      <Sitebar />
      <div className="flex-[1]">

      <Home />
      </div>
      <div className="w-[400px] bg-[#1F1D2B]">

      <Cart/>
      </div>
    </div>
  );
};

export default App;
