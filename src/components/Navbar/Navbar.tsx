import React, { useState } from 'react'

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative flex items-center justify-between z-50'>            
      <button onClick={() => setOpen(prev => !prev)} className='text-white text-2xl md:hidden'>
        <span className="material-symbols-outlined">menu</span>
      </button>          
      <div 
        className={`bg-primaryDark md:bg-primary rounded-md py-4 shadow-xl md:shadow-none absolute md:static top-full right-0 
        flex-col md:flex-row items-center gap-4 lg:gap-8 font-monts text-white text-sm lg:text-sm font-medium 
        ${open ? 'flex' : 'hidden md:flex'}`}
      >
        <a href="#home">Home</a>
        <a href="">Seminars</a>
        <a href="">Pricing</a>
        <a href="">FAQs</a>
        <a href="">Contact Us</a>
        <a href="" className='bg-white hover:bg-whiteDark transition-all ease-in-out text-primary py-[5px] px-[15px] rounded-md'>Consult</a>
      </div>
    </div>
  );
}

export default Menu;


export const Navbar:React.FC = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white py-[10px] px-14">
        <h6 className="font-monts text-sm  md:text-md font-medium mb-2 md:mb-0">Join our latest seminars and events</h6>
        <div className="flex items-center gap-6 text-sm font-medium font-karla">
            <a href="" className="">View Details</a>
            <a href="" className="bg-primary hover:bg-primaryDark px-4 py-[4px] rounded-md text-white">Book Now</a>
        </div>
    </div>
    <div className='bg-primary sticky top-0 z-[99] w-full'>      
      <div className='flex items-center py-[8px] px-14 justify-between'>
        
        <div className='flex items-center gap-4 text-2xl '>
          <div className='rounded-full w-[64px] h-[64px] bg-secondary'/>
          <h2 className='text-white font-bold font-karla'>Lorem Ipsum</h2>        
        </div>        
        <Menu/>
        
      </div>

    </div>
      <div className="sticky top-[20rem] z-40 hidden lg:block">
         <div className='absolute flex flex-col gap-10 left-10'>
          <div className="rounded-md cursor-pointer text-white transition-all ease-in-out bg-primary hover:bg-primaryDark flex items-center justify-center py-[12px] px-[18px] w-[50px] h-[50px]">
            <a href="#">
                <svg  width="22" height="22" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5122 14.0625L13.2065 9.53809H8.86523V6.60205C8.86523 5.36426 9.47168 4.15771 11.416 4.15771H13.3896V0.305664C13.3896 0.305664 11.5986 0 9.88623 0C6.31104 0 3.97412 2.16699 3.97412 6.08984V9.53809H0V14.0625H3.97412V25H8.86523V14.0625H12.5122Z" fill="white"/>
                </svg>
            </a>
            </div>
            <div className="rounded-md cursor-pointer text-white transition-all ease-in-out bg-[#FF0000] hover:bg-[#B20000] flex items-center justify-center py-[12px] px-[18px] w-[50px] h-[50px]">
            <a href="#" className="text-white">
                <svg width="22" height="22" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2084 2.60777C22.9358 1.58129 22.1326 0.772873 21.1128 0.498524C19.2642 0 11.8519 0 11.8519 0C11.8519 0 4.43954 0 2.59097 0.498524C1.57114 0.772917 0.767925 1.58129 0.495312 2.60777C0 4.46832 0 8.35017 0 8.35017C0 8.35017 0 12.232 0.495312 14.0926C0.767925 15.1191 1.57114 15.8938 2.59097 16.1681C4.43954 16.6667 11.8519 16.6667 11.8519 16.6667C11.8519 16.6667 19.2642 16.6667 21.1128 16.1681C22.1326 15.8938 22.9358 15.1191 23.2084 14.0926C23.7037 12.232 23.7037 8.35017 23.7037 8.35017C23.7037 8.35017 23.7037 4.46832 23.2084 2.60777ZM9.4276 11.8746V4.82574L15.6229 8.35026L9.4276 11.8746Z" fill="white"/>
                </svg>
            </a>
            </div>
            <div className="rounded-md cursor-pointer text-white transition-all ease-in-out bg-primary hover:bg-primaryDark flex items-center justify-center py-[12px] px-[18px] w-[50px] h-[50px]">
            <a href="#" className="text-white">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.89648 21.8745H0.361328V7.27002H4.89648V21.8745ZM2.62646 5.27783C1.17627 5.27783 0 4.07666 0 2.62646C1.03799e-08 1.92988 0.276716 1.26183 0.769274 0.769274C1.26183 0.276716 1.92988 0 2.62646 0C3.32305 0 3.9911 0.276716 4.48366 0.769274C4.97621 1.26183 5.25293 1.92988 5.25293 2.62646C5.25293 4.07666 4.07617 5.27783 2.62646 5.27783ZM21.8701 21.8745H17.3447V14.7651C17.3447 13.0708 17.3105 10.8979 14.9868 10.8979C12.6289 10.8979 12.2676 12.7388 12.2676 14.6431V21.8745H7.73731V7.27002H12.0869V9.26221H12.1504C12.7559 8.11475 14.2349 6.90381 16.4414 6.90381C21.0312 6.90381 21.875 9.92627 21.875 13.8521V21.8745H21.8701Z" fill="white"/>
                </svg>
            </a>
            </div>
         </div>
      </div>

    </>
  )
}
