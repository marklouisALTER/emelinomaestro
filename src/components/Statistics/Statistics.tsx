
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
      <div className='flex items-center justify-center gap-6 text-white font-karla font-bold bg-primary w-[1078px] h-[202px] 
      rounded-md absolute left-1/2 transform -translate-x-1/2 top-[calc(100vh-350px)]'>
        {statistics.map((stats, index) => (
            <div key={index} className='flex items-center justify-center gap-2 '>
                <span className='text-[67px]'> {stats.stats} </span>
                <span className='text-[17px] font-normal w-[97px]'>{stats.name}</span>
            </div>
        ))}          
      </div>
    );
  };