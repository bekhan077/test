import React from "react";
import logo from "../../public/assets/logo.svg";
import home from "../../public/assets/Home.svg";
import discount from "../../public/assets/Discount.svg";
import dashboard from "../../public/assets/Dashboard.svg";
import message from "../../public/assets/Message.svg";
import notification from "../../public/assets/Notification.svg";
import setting from "../../public/assets/Setting.svg";
import logout from "../../public/assets/Logout.svg";

const Sitebar = () => {
  return (
    <div className="bg-[#1F1D2B] w-[104px] flex justify-center flex-wrap items-center h-[100vh]">
      <div className="cursor-pointer w-[50px] rounded-[12px] p-[8px] bg-[#eb956a3b]">
        <img src={logo} alt="logo-img" />
      </div>
      <div className="rounded-tl-[15px] ml-4 rounded-bl-[15px] bg-[#2D303E] w-[92px] h-[92px] flex justify-center items-center">
        <div className="cursor-pointer shadow-[0_8px_24px_0_rgba(234,124,105,0.32)] w-[56px] rounded-[12px] p-[16px] bg-[#EA7C69] ">
          <img src={home} alt="home-img" />
        </div>
      </div>
      <div className=" w-[56px] rounded-[12px] p-[16px] cursor-pointer">
        <img src={discount} alt="discount-img" />
      </div>
      <div className=" w-[56px] rounded-[12px] p-[16px] cursor-pointer">
        <img src={dashboard} alt="dash-img-img" />
      </div>
      <div className=" w-[56px] rounded-[12px] p-[16px] cursor-pointer">
        <img src={message} alt="message-img" />
      </div>
      <div className=" w-[56px] rounded-[12px] p-[16px] cursor-pointer">
        <img src={notification} alt="notification-img" />
      </div>
      <div className=" w-[56px] rounded-[12px] p-[16px] cursor-pointer">
        <img src={setting} alt="setting-img" />
      </div>
      <div className=" w-[56px] rounded-[12px] p-[16px] cursor-pointer ">
        <img src={logout} alt="logout-img" />
      </div>
    </div>
  );
};

export default Sitebar;
