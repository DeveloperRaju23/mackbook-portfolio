import React from "react";
import ReuseTitle from "../Reuse/ReuseTitle";
import logo from "../../../public/image/Frame 5 1.png"
import bar from "../../../public/image/Frame 3.png"
import Image from "next/image";
const Header = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("https://i.ibb.co/wYqy4YS/Mask-group.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
      }}
    >
      <div className="container">
        <div className="flex justify-between pt-[20px]">
          <Image src={logo}></Image>
          <Image src={bar}></Image>
        </div>
        <ReuseTitle heading1="" />
        <div className="pt-[200px]">
          <h1
            className=" lg:w-[1010px] xl:w-[1110px] md:w-[700px]  w-full mx-auto lg:text-[96px] md:text-[65px] text-[40px] font-[700] lg:leading-[120px] md:leading-[65px] leading-[50px] text-[white]
] "
          >
            Building the future with technology with{" "}
            <span className="text-[#FB27A6]">OTA</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
