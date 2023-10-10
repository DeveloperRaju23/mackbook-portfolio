import React from 'react'
import ReuseTitle from '../Reuse/ReuseTitle'
import img1 from "../../../public/image/Technology/image1.png"
import img2 from "../../../public/image/Technology/image2.png"
import img3 from "../../../public/image/Technology/image3.png"
import img4 from "../../../public/image/Technology/image4.png"
import img5 from "../../../public/image/Technology/image5.png"
import Image from 'next/image'
const Technology = () => {

  return (
    <div className="bg-black">
      <div className="container">
        <div className="pt-[50px] pb-[30px]">
          <ReuseTitle heading5="Technology" />
          <ReuseTitle
            heading1="What’s Technology We Use"
          />
        </div>
        <div className='md:flex flex flex-wrap gap-2 justify-between items-center pb-[40px]'>
            <Image className='w-[300px] h-[160px]'  src={img1} alt="image" ></Image>
            <Image className='w-[300px] h-[160px]' src={img2} alt="image" ></Image>
            <Image className='w-[300px] h-[160px]' src={img3} alt="image" ></Image>
            <Image className='w-[300px] h-[160px]'  src={img4} alt="image" ></Image>
            <Image className='w-[300px] h-[160px]' src={img5} alt="image" ></Image>
        </div>
      </div>
    </div>
  )
}

export default Technology