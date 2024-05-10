import React from "react";
import { IoCardOutline } from "react-icons/io5";
import { RiPaypalLine } from "react-icons/ri";
import { TbCashBanknoteFilled } from "react-icons/tb";
import { Cash } from "../../public/assets/Cash";

const Payment = ({ setPay }) => {
  return (
    <div className="fixed bg-[#000000B2] w-full h-[100vh] top-0 left-0 flex  justify-end">
      <div className="rounded-[16px_0_0_16px] w-[400px] h-[100vh] bg-[#1F1D2B]">
        <div className="mt-[64px] ml-[24px]">
          <h3 className="text-[#FFF] font-semibold text-[28px]">Payment</h3>
          <p className="text-[#ABBBC2] text-base font-medium ">
            3 payment method available
          </p>
          <hr className="border-[#393C49] w-[357px] mt-[24px]" />
        </div>
        <div className="ml-[24px] mt-[24px]">
          <h3 className="font-semibold text-xl text-[#FFFFFF]">
            Payment Method
          </h3>

          <div className="flex mt-[16px] gap-[8px]">
            <div className="flex flex-col justify-center items-center w-[101px] h-[64px] border rounded-[8px] border-[#393C49]">
              <IoCardOutline className="text-[#FFF]" />
              <p className="mt-[2px] text-[#FFF]">Credit Card</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[101px] h-[64px] border rounded-[8px] border-[#393C49]">
              <RiPaypalLine className="text-[#FFF]" />
              <p className="mt-[2px] text-[#FFF]">Paypal</p>
            </div>
            <div className="flex flex-col justify-center items-center w-[101px] h-[64px] border rounded-[8px] border-[#393C49]">
              <Cash color={"#fff"} />
              <p className="mt-[2px] text-[#FFF]">Cash</p>
            </div>
          </div>
        </div>

        <div className="ml-[24px] mt-[16px]">
          <p className="text-[#FFFFFF] text-sm font-medium">Cardholder Name</p>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Levi Ackerman"
            className="w-[357px] p-[14px] mt-[8px] font-normal text-sm text-[#E0E6E9] bg-[#2D303E] rounded-[8px] border border-[#393C49]"
          />
        </div>
        <div className="ml-[24px] mt-[16px]">
          <p className="text-[#FFFFFF] text-sm font-medium">Card Number</p>
          <input
            type="number"
            id="name"
            name="name"
            placeholder="2564 1421 0897 1244"
            className="w-[357px] p-[14px] mt-[8px] font-normal text-sm text-[#E0E6E9] bg-[#2D303E] rounded-[8px] border border-[#393C49]"
          />
        </div>

        <div className="ml-[24px] mt-[24px] flex gap-[13px]">
          <div>
            <p className="text-[#FFFFFF] text-sm font-medium">
              Expiration Date
            </p>
            <input
              type="date"
              placeholder="02/2022"
              className="p-[14px] rounded-[8px] w-[172px] mt-[8px] bg-[#2D303E] text-[#E0E6E9] border border-[#393C49]"
            />
          </div>
          <div>
            <p className="text-[#FFFFFF] text-sm font-medium">CVV</p>
            <input
              type="password"
              placeholder="123"
              className="p-[14px] rounded-[8px] w-[172px] mt-[8px] bg-[#2D303E] text-[#E0E6E9] border border-[#393C49]"
            />
          </div>
        </div>
        <hr className="mt-[16px] border-[#393C49] w-[357px] ml-[24px]" />
        <div className="ml-[24px] mt-[24px] flex gap-[13px]">
          <div>
            <p className="text-[#FFFFFF] text-sm font-medium">Order Type</p>
            <select className="mt-[8px] rounded-[8px] w-[172px] border border-[#393C49] text-[#E0E6E9] p-[18px] bg-[#1F1D2B]">
              <option value="option">Dine In</option>
            </select>
          </div>
          <div>
            <p className="text-[#FFFFFF] text-sm font-medium">Table no.</p>
            <input
              type="password"
              placeholder="140"
              className="p-[14px] w-[172px] rounded-[8px] mt-[8px] bg-[#2D303E] text-[#E0E6E9] border border-[#393C49]"
            />
          </div>
        </div>
        <div className="ml-[24px] mt-[89px] ">
          <button
            onClick={() => setPay(false)}
            className="rounded-[8px] text-[#EA7C69] p-[14px] border border-[#EA7C69] w-[175px]"
          >
            Cancel
          </button>
          <button className="ml-[8px] rounded-[8px] w-[175px] shadow-[0_8px_24px_0_rgba(234,124,105,0.32)] text-[#FAFAFA] bg-[#EA7C69] p-[14px] ">
            Confirm Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
