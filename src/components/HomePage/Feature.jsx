import image1 from '../../assets/feature/network.JPG'
import image2 from '../../assets/feature/2.JPG'
import image3 from '../../assets/feature/3.JPG'
import image4 from '../../assets/feature/4.JPG'
import image5 from '../../assets/feature/5.JPG'
import image6 from '../../assets/feature/6.JPG'


const Feature = () => {
    return (
        <div className="bg-secondary py-14">
            <div className="container mx-auto flex mb-14 p-2">
                <div className="lg:w-2/3">
                    <h2 className="text-3xl md:text-6xl text-center font-extrabold">All the good things you get access to</h2>
                    <div>
                        <div className='flex flex-col md:flex-row-reverse lg:flex-row justify-between gap-14 items-center'>
                            <div className="my-10">
                                <h2 className="text-3xl mb-6 font-semibold text-primary"><span className="border-2 border-primary px-3 shadow-md py-1 rounded-full mr-3">1</span> <span>30+ Ad Networks</span></h2>
                                <p className="text-xl">Maximize competition for your ad inventory with premium ad networks including CPM ad networks and gain access to demand from top players like Google, Amazon, Xander, Index Exchange, etc.</p>
                            </div>
                            <div>
                                <img className='w-[550px]' src={image1} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row-reverse lg:flex-row justify-between gap-14 items-center'>
                            <div className="my-10">
                                <h2 className="text-3xl mb-6 font-semibold text-primary"><span className="border-2 border-primary px-3 shadow-md py-1 rounded-full mr-3">2</span> <span>Improved Page Speed</span></h2>
                                <p className="text-xl">AdPushup’s bundle size reduction ensures that ads do not affect the website's core web vitals.</p>
                            </div>
                            <div>
                                <img className='w-[250px]' src={image2} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row-reverse lg:flex-row justify-between gap-14 items-center'>
                            <div className="my-10">
                                <h2 className="text-3xl mb-6 font-semibold text-primary"><span className="border-2 border-primary px-3 shadow-md py-1 rounded-full mr-3">3</span> <span>360-Degree Reporting</span></h2>
                                <p className="text-xl">Find out which ad networks earn the most for you and at what time of day- all in one dashboard.</p>
                            </div>
                            <div>
                                <img className='w-[250px]' src={image3} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row-reverse lg:flex-row justify-between gap-14 items-center'>
                            <div className="my-10">
                                <h2 className="text-3xl mb-6 font-semibold text-primary"><span className="border-2 border-primary px-3 shadow-md py-1 rounded-full mr-3">4</span> <span>Best AdSense Alternative</span></h2>
                                <p className="text-xl">Diversify your revenue streams further with Adpushup. Utilize our unique ad formats, advanced targeting options, to maximize ad inventory potential and enhance your earnings.</p>
                            </div>
                            <div>
                                <img className='w-[450px]' src={image4} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row-reverse lg:flex-row justify-between gap-14 items-center'>
                            <div className="my-10">
                                <h2 className="text-3xl mb-6 font-semibold text-primary"><span className="border-2 border-primary px-3 shadow-md py-1 rounded-full mr-3">5</span> <span>Access to Premium Demand Partners</span></h2>
                                <p className="text-xl">Amplify your ad revenue with access to the premium Supply Side Platforms, connecting you with a wide range of demand sources and high-quality advertisers.</p>
                            </div>
                            <div>
                                <img className='w-[450px]' src={image5} alt="" />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row-reverse lg:flex-row justify-between gap-14 items-center'>
                            <div className="my-10">
                                <h2 className="text-3xl mb-6 font-semibold text-primary"><span className="border-2 border-primary px-3 shadow-md py-1 rounded-full mr-3">6</span> <span>Results-Driven Ad Ops Team</span></h2>
                                <p className="text-xl">Results-driven ad ops team committed to skyrocketing your ad revenue. Best of all, our ad ops team is fueled by dedication, so you can be rest assured knowing you’re bound to have substantial growth.</p>
                            </div>
                            <div>
                                <img className='w-[450px]' src={image6} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/6">

                </div>
            </div>
        </div>
    );
};

export default Feature;