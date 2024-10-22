import image1 from '../../assets/partnership/1.JPG'
import image2 from '../../assets/partnership/2.JPG'
import image3 from '../../assets/partnership/3.JPG'
import image4 from '../../assets/partnership/4.JPG'
import image5 from '../../assets/partnership/5.JPG'
import image6 from '../../assets/partnership/6.JPG'

const Partnership = () => {
    return (
        <div className="container mx-auto flex my-14 p-2">
            <div className="lg:w-2/3">
                <h2 className="text-3xl md:text-6xl mb-14 text-center font-extrabold">Just some reasons why publishers partner with us</h2>
                {/* cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='flex flex-col justify-center space-y-3 items-center bg-gradient-to-t from-[#FF4854] p-4 rounded-lg text-white to-[#F3295B]'>
                        <img src={image1} alt="" />
                        <h2 className='text-3xl font-bold'>Higher Demand</h2>
                        <p className='text-2xl text-center font-medium'>Access to demand from 50+ tier-1 ad exchanges, including Google AdX and OpenX</p>
                    </div>
                    <div className='flex flex-col justify-center space-y-3 items-center bg-gradient-to-t from-[#FF4854] p-4 rounded-lg text-white to-[#F3295B]'>
                        <img src={image2} alt="" />
                        <h2 className='text-3xl font-bold'>Insightful Reporting</h2>
                        <p className='text-2xl text-center font-medium'>Unified reporting with easily identifiable metrics and in-depth analysis to fine-tune performance.</p>
                    </div>
                    <div className='flex flex-col justify-center space-y-3 items-center bg-gradient-to-t from-[#FF4854] p-4 rounded-lg text-white to-[#F3295B]'>
                        <img src={image3} alt="" />
                        <h2 className='text-3xl font-bold'>Improved Viewability</h2>
                        <p className='text-2xl text-center font-medium'>Improved ad viewability score with ad formats like sticky ads, docked ads, native ads across devices.</p>
                    </div>
                    <div className='flex flex-col justify-center space-y-3 items-center bg-gradient-to-t from-[#FF4854] p-4 rounded-lg text-white to-[#F3295B]'>
                        <img src={image4} alt="" />
                        <h2 className='text-3xl font-bold'>AdBlock Solutions</h2>
                        <p className='text-2xl text-center font-medium'>Potential to earn back revenue lost to ad blockers with pro-user ad-reinsertion technology.</p>
                    </div>
                    <div className='flex flex-col justify-center space-y-3 items-center bg-gradient-to-t from-[#FF4854] p-4 rounded-lg text-white to-[#F3295B]'>
                        <img src={image5} alt="" />
                        <h2 className='text-3xl font-bold'>Better Clickthrough-Rates</h2>
                        <p className='text-2xl text-center font-medium'>Significant increase in clickthrough rates owing to reduced banner blindness for ad inventory.</p>
                    </div>
                    <div className='flex flex-col justify-center space-y-3 items-center bg-gradient-to-t from-[#FF4854] p-4 rounded-lg text-white to-[#F3295B]'>
                        <img src={image6} alt="" />
                        <h2 className='text-3xl font-bold'>Faster Page-Loading</h2>
                        <p className='text-2xl text-center font-medium'>Minimized page latency with modular code generation, lazy loading, and CDN-based delivery.</p>
                    </div>
                </div>

            </div>
            <div className="lg:w-2/6">

            </div>
        </div>
    );
};

export default Partnership;