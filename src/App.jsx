import React, { useState } from "react";
import { Sitebar } from "./components";
import { Home } from "./components";
import Cart from "./components/Cart";
import Payment from "./components/Payment";

const App = () => {
  const [pay, setPay] = useState(false);
  return (
    <div className="flex">
      <Sitebar />
      <div className="flex-[1]">
        <Home />
      </div>
      <div className="w-[400px] bg-[#1F1D2B]">
        <Cart setPay={setPay} />
      </div>
      <div>{pay && <Payment setPay={setPay}/>}</div>
    </div>
  );
};

export default App;
