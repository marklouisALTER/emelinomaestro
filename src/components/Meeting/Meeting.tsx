import React from 'react'
import meeting_picture_one from '../../assets/images/meeting-pic-1.jpg'
const Meeting:React.FC = () => {
  return (
    <section className='w-full h-screen'>
        <div className='w-full h-full relative'>
            <img 
                src={meeting_picture_one}
                alt="Group Picture Two"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 backdrop-blur-lg bg-[#000000] opacity-70"></div>
            <div className="absolute inset-0 z-10 w-full h-full p-10 px-14">
                <div className='flex flex-col gap-2 items-center justify-center'>
                    <h1 className="text-4xl font-bold text-primary">Meetings</h1>
                    <p className="text-xl text-white font-monts">
                    Join a lecuture
                    </p>
                </div>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 h-[30rem]'>
                    <div className='w-full hidden lg:block border border-white'>

                    </div>
                    <div className='w-full border border-white'></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Meeting