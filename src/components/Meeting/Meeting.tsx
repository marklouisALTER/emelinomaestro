import React from 'react'
import meeting_picture_one from '../../assets/images/meeting-pic-1.jpg'
import meeting_picture_two from '../../assets/images/meeting-pic-2.jpg'
import group_picture_two from '../../assets/images/group-pic-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Pagination } from 'swiper/modules';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
                    <h1 
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="200"
                        className="text-4xl font-bold text-primary">Meetings</h1>
                    <p 
                        data-aos="fade-down"
                        data-aos-duration="400"
                        className="text-xl text-white font-monts"
                    >
                    Join a lecuture
                    </p>
                </div>
                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10 h-[30rem]'>
                    <div className='w-full hidden lg:flex justify-center items-center'>
                        <div className='w-[25rem]'>
                            <Swiper
                                effect={'cards'}
                                grabCursor={true}
                                pagination={{
                                    clickable: true,
                                  }}
                                  initialSlide={1}
                                modules={[EffectCards, Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <LazyLoadImage 
                                        data-aos="zoom-in"
                                        data-aos-duration="200"
                                        src={meeting_picture_one}
                                        alt="Group Picture One"
                                        className="w-full h-full object-cover rounded-md border-2 border-white"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <LazyLoadImage
                                        data-aos="zoom-in"
                                        data-aos-duration="400"
                                        src={meeting_picture_two}
                                        alt="Group Picture Two"
                                        className="w-full h-full object-cover rounded-md border-2 border-white"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <LazyLoadImage
                                        data-aos="zoom-in"
                                        data-aos-duration="600"
                                        src={group_picture_two}
                                        alt="Group Picture Three"
                                        className="w-full h-full object-cover rounded-md border-2 border-white"
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className='w-full flex items-center justify-start'>
                        <div className='flex flex-col justify-start gap-2 xl:w-[80%]'>
                            <h1 
                                data-aos="fade-right"
                                data-aos-duration="200"
                                className="text-4xl text-center lg:text-left font-extrabold text-primary font-karla">Join Lecture and Learn</h1>
                            <p 
                                data-aos="fade-right"
                                data-aos-duration="300"                          
                                className="text-lg text-center lg:text-left text-white font-monts mt-5">
                                Join a meeting with a group of people who share the same interest as you. And learn from the best in the industry.
                                
                            </p>
                            <p 
                                data-aos="fade-right"  
                                data-aos-duration="400"                      
                                className="text-lg text-center lg:text-left text-white mt-5 font-monts">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <button 
                                data-aos="fade-right"
                                data-aos-duration="500"
                                className="px-4 mt-5 py-2 bg-[#5B94E9B5] transition-all ease-in-out hover:bg-primary font-bold text-xl text-white rounded-lg font-monts ">
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