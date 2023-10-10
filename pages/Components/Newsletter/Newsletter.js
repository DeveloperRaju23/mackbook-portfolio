import React from 'react'
import image from "../../../public/image/Rectangle 12.png"
import ReuseTitle from '../Reuse/ReuseTitle'
const Newsletter = () => {
  return (
   <div className='bg-black'>
     <div className='container pt-20 pb-20'>
       <div  style={{
        backgroundImage: 'url("https://i.ibb.co/QkHtLgF/Rectangle-12.png")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        
      }}>
    <div className='text-white md:flex flex flex-wrap justify-between items-center py-[60px]'>
        <div className='lg:w-1/3 w-full '>
        <h2 className='text-[48px] leading-[60px] text-center font-[700]' >Subscribe To Our <span className='text-[#FF03C8]'> Newsletter</span>
</h2>
<p className='lg:w-[350px] w-full mx-auto text-center text-[#ccc] tracking-widest'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className='lg:w-3/5 w-full' >
         
             {/* <div className="relative">
      <input
        className="border-2  w-full bg-transparent h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none focus:border-blue-500 "
        type="text"
        placeholder="Enter your text"
      />
      <button
        className="absolute inset-y-0 right-0 px-4 py-2 border border-transparent text-sm font-medium rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 text-white"
      >
        Button
      </button>
    </div>
    </div> */}
       <div className="relative  lg:pe-28 mt-6 lg:mt-0">
      <input
        className="border-[1px] w-full rounded-full  bg-transparent py-6 text-sm focus:outline-none  ps-5"
        style={{
          borderImageSource: 'linear-gradient(159.31deg, #00E7D9 1.37%, rgba(52, 0, 118, 0.78) 49.27%, rgba(250, 0, 255, 0.9) 94.03%)',
          borderImageSlice:'1', 

        }}
        type="text"
        placeholder="Enter your Email address"
      />
      <button className='bg-[#FF03C8]  absolute top-[10px] me-5 inset-y-0  lg:right-28 right-0 h-12 w-36 rounded-xl font-[500] tracking-widest text-black'>Subscribe</button>
    </div>
        </div>

       </div>
       </div>
   
    </div>
   </div>
  )
}

export default Newsletter