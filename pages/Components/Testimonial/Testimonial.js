import React from 'react'
import ReuseTitle from '../Reuse/ReuseTitle'
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Image from 'next/image';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";



const Testimonial = () => {
  const sliderInfo = [
    {
        id:'1',
        name:'John hed',
        ceo:'CEO , Nextgen',
        img:'https://i.ibb.co/mJFWHfG/Rectangle-10-1.png',
        desc:'Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private'

    },
    {
      id:'1',
      name:'John hed',
      ceo:'CEO , Nextgen',
      img:'https://i.ibb.co/z2Dr2sc/Rectangle-10-2.png',
      desc:'Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private'

  },
  {
    id:'1',
    name:'John hed',
    ceo:'CEO , Nextgen',
    img:'https://i.ibb.co/hcRhxjJ/Rectangle-10.png',
    desc:'Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private'

},
{
  id:'1',
  name:'John hed',
  ceo:'CEO , Nextgen',
  img:'https://i.ibb.co/hcRhxjJ/Rectangle-10.png',
  desc:'Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private'

},
{
  id:'1',
  name:'John hed',
  ceo:'CEO , Nextgen',
  img:'https://i.ibb.co/hcRhxjJ/Rectangle-10.png',
  desc:'Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private'

}
  ]
  return (
    <div className="bg-black">
    <div className="container">
      <div className="pt-[50px] pb-[50px]">
        <ReuseTitle heading5="Testimonial" />
        <ReuseTitle
          heading1="What’s Our Clients Says"
        />
        <ReuseTitle para1="Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private" />
      </div>
      <div>
          <Swiper
          modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
            }}
          
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {sliderInfo?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="text-white cursor-pointer py-[60px] text-center">
                  {/* <Image src={item.img} ></Image> */}
                 <div className='flex justify-center'>
                 <img src={item.img} alt="" />
                 </div>
                    <h2 className='lg:text-[36px] text-[28px] font-[700]'>{item.name}</h2>
                    <p className='text-[20px] mb-[10px]'>{item.ceo}</p>
                    <div className='flex justify-center items-center mb-3'>
                      <AiFillStar className='text-[#F6ED00] h-6 w-6'/>
                      <AiFillStar className='text-[#F6ED00] h-6 w-6'/>
                      <AiFillStar className='text-[#F6ED00] h-6 w-6'/>
                      <AiFillStar className='text-[#F6ED00] h-6 w-6'/>
                      <AiOutlineStar className=' h-6 w-6'/>
                    </div>
                    <p className='text-[18px] lg:px-[35px] px-[10px] tracking-widest font-[400] leading-[25px] text-[#aaa1a1cc]'>{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

      </div>
    </div>
  </div>
  )
}

export default Testimonial