import React from "react";
import ReuseTitle from "../Reuse/ReuseTitle";
import img1 from "../../../public/image/Partner/1200px-Amadeus_(CRS)_Logo 1.png";
import img2 from "../../../public/image/Partner/Galileo_Travelport 1.png";
import img3 from "../../../public/image/Partner/Vector.png";
import img4 from "../../../public/image/Partner/Ellipse 60.png";
import Image from "next/image";
const Partner = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="pt-[50px] pb-[30px]" >
          <ReuseTitle heading5="Partner" />
          <ReuseTitle heading1="Our Key Partnerships" />
        </div>
        <div className="lg:w-[900px] md:w-[700px] w-full mx-auto md:flex flex flex-wrap gap-2 justify-between items-center pb-[40px]" data-aos="fade-left">
          <Image className="w-[250px] h-[80px]" src={img1} alt="image"></Image>
          <Image className="w-[250px] h-[80px]" src={img2} alt="image"></Image>
          <Image className="w-[250px] h-[80px]" src={img3} alt="image"></Image>
        </div>
        {/* <Image className='absolute top-[-100px] left-[26%] opacity-30' src={img4}></Image> */}
      </div>
    </div>
  );
};

export default Partner;
