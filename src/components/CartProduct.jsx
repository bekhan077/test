import React from "react";
import food from "../../public/assets/food.svg";
import { CgTrashEmpty } from "react-icons/cg";

const CartProduct = () => {
  return (
    <div className="flex justify-between py-[30px] gap-4">
      <div className=" flex-[1] gap-4 flex-col ">
        <div className=" flex justify-between">
          <div className="flex gap-2">
            <img
              src={food}
              alt="food-img"
              className="rounded-[50%] w-[45px] h-[45px] "
            />
            <div>
              <h3 className="text-[#fff] text-[14px]">Spicy seasoned sea...</h3>
              <p className="text-[#ABBBC2] text-[12px] font-medium pt-[4px]">
                $ 2.29
              </p>
            </div>
          </div>
          <button className="border border-[#2D303E] bg-[#393C49] rounded-md w-[45px] h-[45px] text-[#fff]">
            2
          </button>
        </div>

        <input
          type="text"
          className="text-[#E0E6E9] border-[#2D303E] bg-[#393C49] bg-transparent border rounded-lg w-full mt-[10px] p-[10px]"
          placeholder="Order Note..."
        />
      </div>
      <div className=" flex flex-col gap-[19px] pt-[13px]">
        <p className="text-[#fff]">$ 4,58</p>
        <button className="w-[45px] text-white h-[45px] border rounded-lg border-[#FF7CA3] bg-[##11D2B] flex justify-center items-center">
          <CgTrashEmpty className="text-[#FF7CA3]"/>
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
