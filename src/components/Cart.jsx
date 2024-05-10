import React from "react";
import CartProduct from "./CartProduct";

const Cart = ({ setPay }) => {
  return (
    <div className="py-[22px] px-[24px]">
      <h3 className="text-2xl font-semibold text-[#FFF]">Orders #34562</h3>
      <div className="flex gap-[8px] mt-[24px]">
        <button className="font-semibold text-sm px-[12px] py-[7px] text-white bg-[#EA7C69] rounded-[8px]">
          Dine In
        </button>
        <button className="font-semibold text-sm px-[12px] py-[7px] text-[#EA7C69] bg-[#1F1D2B] rounded-[8px] border border-[#393C49]">
          To Go
        </button>
        <button className="font-semibold text-sm px-[12px] py-[7px] text-[#EA7C69] bg-[#1F1D2B] rounded-[8px] border border-[#393C49]">
          Delivery
        </button>
      </div>

      <div className="flex justify-between mt-[24px]">
        <span className="text-[#FFF] font-semibold text-base">Item</span>
        <div>
          <span className=" text-[#FFF] font-semibold text-base">Qty</span>
          <span className="ml-[43px] text-[#FFF] font-semibold text-base">
            Price
          </span>
        </div>
      </div>
      <hr className="mt-[24px] border-[#393C49]" />
      <div>
        <CartProduct />
      </div>

      <div className="mt-[70px]">
        <div className="flex justify-between">
          <p className="text-[#ABBBC2] text-sm font-normal">Discount</p>
          <p className="text-[#FFFFFF] text-base font-medium">$0</p>
        </div>
        <div className="flex justify-between mt-[10px]">
          <p className="text-[#ABBBC2] text-sm font-normal">Sub total</p>
          <p className="text-[#FFFFFF] text-base font-medium"> $ 21,03</p>
        </div>
        <button
          onClick={() => setPay(true)}
          className="text-sm font-semibold rounded-[8px] mt-[42px] text-[#FAFAFA] w-[314px] bg-[#EA7C69] py-[14px] px-[14px]"
        >
          Continue to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
