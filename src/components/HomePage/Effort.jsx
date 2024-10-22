import image from '../../assets/working.png'

const Effort = () => {
    return (
        <div className="bg-gradient-to-b from-[#FF4854] to-[#F3295B] p-4 rounded-lg text-white">
            <div className="container mx-auto py-6 md:py-10">
                <div className="lg:w-[75%]">
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <h2 className="text-5xl"><span className="font-semibold">We make earning big on ads seem effortless.</span> <span>Just like you make growing big on publishing seem effortless.</span> </h2>
                        <img className='h-[450px]' src={image} alt="" />
                    </div>
                </div>
                <div className="lg:w-[25%]">

                </div>
            </div>
        </div>
    );
};

export default Effort;