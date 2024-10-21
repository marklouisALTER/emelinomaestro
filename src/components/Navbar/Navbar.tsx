import React, { useState } from 'react'

const Menu: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='relative flex items-center justify-between z-50'>            
      <button onClick={() => setOpen(prev => !prev)} className='text-white text-2xl md:hidden'>
        <span className="material-symbols-outlined">menu</span>
      </button>          
      <div 
        className={`bg-primaryDark md:bg-primary rounded-md  p-4 shadow-xl md:shadow-none absolute md:static top-full right-0 
        flex-col md:flex-row items-center gap-4 lg:gap-8 font-monts text-white text-sm lg:text-xl font-medium 
        ${open ? 'flex' : 'hidden md:flex'}`}
      >
        <a href="">Home</a>
        <a href="">Seminars</a>
        <a href="">Pricing</a>
        <a href="">FAQs</a>
        <a href="">Contact Us</a>
        <a href="" className='bg-white hover:bg-whiteDark text-primary py-[5px] px-[15px] rounded-md'>Consult</a>
      </div>
    </div>
  );
}

export default Menu;


export const Navbar:React.FC = () => {
  return (
    <div className='bg-primary'>      
      <div className='flex items-center py-[8px] px-[20px] justify-between'>
        
        <div className='flex items-center gap-4 text-2xl '>
          <div className='rounded-full w-[64px] h-[64px] bg-secondary'/>
          <h2 className='text-white font-bold font-karla'>Lorem Ipsum</h2>        
        </div>        
        <Menu/>
        
      </div>

    </div>
  )
}
