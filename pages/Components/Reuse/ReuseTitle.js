import React from 'react'

const ReuseTitle = ({heading1, heading5,para1,subBtn}) => {
  return (
    <>
       <h1 className='className=" lg:w-[1010px] md:w-[700px]  w-full mx-auto lg:text-[64px] md:text-[45px] text-[30px] font-[700] lg:leading-[64px] md:leading-[65px] leading-[40px] text-[white] text-center md:my-[20px] mb-[10px]'>{heading1}</h1>

       <h5 className='lg:w-[1010px] md:w-[700px]  w-full mx-auto lg:text-[36px] md:text-[30px] text-[26px] font-[500] lg:leading-[45px] md:leading-[45px] leading-[40px] text-[#FF03C8] text-center '>{heading5}</h5>

       <p className='lg:w-[1010px] md:w-[700px]  w-full mx-auto lg:text-[20px] md:text-[20px] text-[14px] font-[500] lg:leading-[25px] md:leading-[25px] leading-[20px] text-[#cccc] text-center '>{para1}</p>

  
        </>
      
  )
}

export default ReuseTitle