
interface StatisticsProps {
    stats: string;
    name: string;
}

const statistics:StatisticsProps[] = [
    {
        stats: "10+",
        name:"Years of Experience"
    },
    {
        stats: "50+",
        name:"Successful Seminars"
    },
    {
        stats: "1k",
        name:"Happy Clients"
    },
    {
        stats: "100+",
        name:"Guestings"
    },
]

export const Statistics: React.FC = () => {
    return (
      <div className='relative w-full flex items-center justify-center gap-6 text-white font-karla font-bold 
        rounded-md'>
            <div className="absolute bg-primary hidden md:flex md:gap-3 lg:gap-5 p-5 rounded-md shadow-lg shadow-gray-400">
                {statistics.map((stats, index) => (

                    <div key={index} className='w-full flex items-center justify-evenly md:px-1 lg:px-5 gap-2'>
                        <span className='text-[30px] lg:text-[44px] xl:text-[60px]'> {stats.stats} </span>
                        <span className='lg:text-[13px] xl:text-[17px] font-normal w-[97px]'>{stats.name}</span>
                    </div>
                ))}          
            </div>
      </div>
    );
  };