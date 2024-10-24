import React from 'react'
import meeting_picture_one from '../../assets/images/meeting-pic-1.jpg'
import meeting_picture_two from '../../assets/images/meeting-pic-2.jpg'
import group_picture_two from '../../assets/images/group-pic-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Meeting:React.FC = () => {
  return (
    <section className='w-full h-screen'>
        <div className='w-full h-full relative'>
            <LazyLoadImage 
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
                    <div className='w-full hidden lg:flex justify-center items-center'>
                        <div className='w-[25rem]'>
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                modules={[EffectCards]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <LazyLoadImage 
                                        src={meeting_picture_one}
                                        alt="Group Picture One"
                                        className="w-full h-full object-cover rounded-md border-2 border-white"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <LazyLoadImage
                                        src={meeting_picture_two}
                                        alt="Group Picture Two"
                                        className="w-full h-full object-cover rounded-md border-2 border-white"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <LazyLoadImage
                                        src={group_picture_two}
                                        alt="Group Picture Three"
                                        className="w-full h-full object-cover rounded-md border-2 border-white"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <div className='flex flex-col gap-2'>
                            <h1 className="text-4xl text-center lg:text-left font-extrabold text-primary font-karla">Join Lecture and Learn</h1>
                            <p className="text-lg text-center lg:text-left text-white font-monts mt-5">
                                Join a meeting with a group of people who share the same interest as you. And learn from the best in the industry.
                                
                            </p>
                            <p className="text-lg text-center lg:text-left text-white mt-5 font-monts">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <button className="px-4 mt-5 py-2 bg-[#5B94E9B5] transition-all ease-in-out hover:bg-primary font-bold text-xl text-white rounded-lg font-monts ">
                                Join Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Meeting