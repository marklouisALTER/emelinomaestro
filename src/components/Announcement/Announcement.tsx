

export const Announcement: React.FC = () => {

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white py-[10px] px-[20px] md:px-[120px]">
            <h6 className="font-monts text-sm  md:text-md font-medium mb-2 md:mb-0">Join our latest seminars and events</h6>
            <div className="flex items-center gap-6 text-sm font-medium font-karla">
                <a href="" className="">View Details</a>
                <a href="" className="bg-primary hover:bg-primaryDark px-4 py-[4px] rounded-md text-white">Book Now</a>
            </div>
        </div>
    );
}