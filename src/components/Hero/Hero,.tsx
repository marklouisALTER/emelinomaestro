
import { Statistics } from "../Statistics/Statistics"
import group_picture_one from '../../assets/images/group-pic-1.jpg'
import group_picture_two from '../../assets/images/group-pic-2.jpg'
import group_picture_three from '../../assets/images/group-pic-3.jpg'
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';


export const Hero:React.FC = () => {
    return (
        <section id="home" className="w-full h-[601px] relative">
           <div className="h-[37rem]">
            <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                      }}
                    modules={[EffectFade, Autoplay]}
                    className="mySwiper h-[37rem] relative"


                >
                    <SwiperSlide>
                        <LazyLoadImage
                                src={group_picture_one}
                                alt="Group Picture One"
                                className="w-full z-[4] h-full object-cover"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LazyLoadImage
                                src={group_picture_two}
                                alt="Group Picture Two"
                                className="w-full z-[4] h-full object-cover"
                            />
                    </SwiperSlide>
                    <SwiperSlide>
                        <LazyLoadImage
                                src={group_picture_three}
                                alt="Group Picture Three"
                                className="w-full z-[4] h-full object-cover"
                            />
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className="absolute inset-0 z-[10] mb-2 backdrop-blur-lg bg-[#000000] opacity-70"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-inter font-bold">
            <h1 
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="300"
                className="text-white text-5xl md:text-5xl lg:text-8xl mb-2 z-[11]">Resibo Pilipinas</h1>
            {/* <h4 className="text-white text-lg md:text-4xl">Lorem Ipsum</h4> */}
            <span 
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-anchor-placement="center-bottom"
                className="text-gray-400 mt-5 px-4 md:px-8 lg:px-16 font-medium max-w-[847px] z-[11]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            <button 
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-anchor-placement="center-bottom"
                className="mt-10 px-4 py-2 z-[11] bg-[#5B94E9B5] transition-all ease-in-out hover:bg-primary font-bold text-xl text-white rounded-lg font-monts ">
                See More
            </button>
            
            </div>     
            <Statistics />   

        </section>
    )
}