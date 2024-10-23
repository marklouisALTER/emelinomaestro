
import { Statistics } from "../Statistics/Statistics"
import group_picture_one from '../../assets/images/group-pic-1.jpg'


export const Hero:React.FC = () => {
    return (
        <section id="home" className="w-full h-[601px] relative">
           <div className="h-[37rem] relative">
            <img
                    src={group_picture_one}
                    alt="Description"
                    className="w-full z-[99] h-full object-cover"
                />
            </div>
            <div className="absolute inset-0 backdrop-blur-lg bg-[#292222] opacity-70"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-inter font-bold">
            <h1 className="text-white text-5xl md:text-5xl lg:text-8xl mb-2">Resibo Pilipinas</h1>
            {/* <h4 className="text-white text-lg md:text-4xl">Lorem Ipsum</h4> */}
            <span className="text-gray-400 mt-5 px-4 md:px-8 lg:px-16 font-medium max-w-[847px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            <button className="mt-10 px-4 py-2 bg-[#5B94E9B5] transition-all ease-in-out hover:bg-primary font-bold text-xl text-white rounded-lg font-monts ">
                See More
            </button>
            
            </div>     
            <Statistics />   

        </section>
    )
}