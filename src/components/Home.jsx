import React from "react";
import { FaSearch } from "react-icons/fa";
import data1 from "../Data.json";

const Home = () => {
  const { data } = data1;
  return (
    <div className="pl-[10px] pt-2 w-full pr-10">
      <div className="flex justify-between w-[100%]">
        <div>
          <h3 className="text-white font-semibold text-3xl">Jaegar Resto</h3>
          <p className="text-[#E0E6E9] pt-1">Tuesday, 2 Feb 2021</p>
        </div>
        <div className="flex justify-center px-5 py-3 items-center gap-2 w-[220px] h-[48px] border-zinc-600 bg-[#393c49] border rounded-[8px]">
          <FaSearch className="text-[#FFFFFF]" />
          <input
            className=" bg-transparent w-full outline-none text-[#fff]"
            type="search"
            name="search"
            id="search"
            placeholder="Search for food, coffe, etc.."
          />
        </div>
      </div>

      <div>
        <ul className="mt-[24px] flex gap-[32px] font-semibold text-base">
          <li className="text-[#fff]">Hot Dishes</li>
          <li className="text-[#fff]">Cold Dishes</li>
          <li className="text-[#fff]">Soup</li>
          <li className="text-[#fff]">Grill</li>
          <li className="text-[#fff]">Appetizer</li>
          <li className="text-[#fff]">Dessert</li>
        </ul>
        <hr className="mt-[13px] relative rounded-sm border-[#393C49] border w-[850px]" />
        <span className="absolute top-[131px] h-1 bg-[#EA7C69] rounded-sm w-[50px] border border-[#EA7C69] block"></span>
      </div>

      <div className="mt-[34px]">
        <div className="flex justify-between w-[850px]">
          <h3 className="text-[#FFF] text-xl font-semibold">Choose Dishes</h3>
          <select className="bg-[#1F1D2B] p-[14px] text-white border rounded-[8px] border-[#393C49]">
            <option className="option" value="option">
              Dine In
            </option>
            <option className="option" value="option">
              To Go
            </option>
            <option className="option" value="option">
              Delivery
            </option>
          </select>
        </div>

        <div className="flex gap-[28px] flex-wrap overflow-x-scroll scroll h-[63vh] w-[100%]">
          {data.map((product, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-all ease-in-out duration-300 hover:cursor-pointer rounded-[20px] w-[191px] h-[226px] bg-[#1F1D2B] relative mt-[68px] flex flex-col justify-center items-center"
            >
              <img
                className="rounded-[50%] absolute top-[-34px] w-[132px] h-[132px]"
                src={product.image}
                alt="food-img"
              />
              <p className="text-white w-[144px] pt-[100px] text-[14px] text-center">
                {product.name}
              </p>
              <p className="text-white text-[14px] mt-[8px]">
                $ {product.price}
              </p>
              <span className="text-[#ABBBC2] text-[14px] mt-[4px]">
                {product.sale} Bowls available
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
