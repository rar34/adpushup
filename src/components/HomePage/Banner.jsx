import { FaCheck } from "react-icons/fa";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// const images = [
//     "https://i.ibb.co.com/rpD2M0c/gsm.jpg",
//     "https://i.ibb.co.com/6bqgLJ5/ndtv.jpg",
//     "https://i.ibb.co.com/9WPdPgr/news.jpg"
// ];


const Banner = () => {

    const [sliderRef] = useKeenSlider({
        loop: true,
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 2, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 3, spacing: 10 },
            },
        },
        slides: { perView: 1 },
    });


    return (
        <div className="bg-primary">
            {/* logo */}
            <div className="container mx-auto p-2">
                <h2 className="text-5xl font-bold py-10 italic text-white">Adpushup</h2>
                <div className="">
                    <h2 className="text-5xl space-y-3 font-bold text-white max-w-1/2">Grow your ad revenue <br /> by more than 40% with <br /> Google's Premier <br /> Certified Publishing <br /> Partner</h2>
                    <div className="space-y-2 py-6">
                        <p className="flex items-center gap-2"><FaCheck className="text-2xl bg-green-600 text-white" /><span className="text-2xl text-white">Exclusive access to direct deals.</span></p>
                        <p className="flex items-center gap-2"><FaCheck className="text-2xl bg-green-600 text-white" /><span className="text-2xl text-white">Increased competition for your ad inventory.</span></p>
                        <p className="flex items-center gap-2"><FaCheck className="text-2xl bg-green-600 text-white" /><span className="text-2xl text-white">Ad fraud detection with Google policy compliance.</span></p>
                    </div>
                    {/* slider for banner */}
                    <div className="pt-14 pb-24">
                        <div ref={sliderRef} className="keen-slider items-center max-w-2xl rounded-md bg-white p-5">
                            <div className="keen-slider__slide number-slide1"><img src="https://i.ibb.co.com/rpD2M0c/gsm.jpg" alt="" /></div>
                            <div className="keen-slider__slide number-slide2"><img src="https://i.ibb.co.com/6bqgLJ5/ndtv.jpg" alt="" /></div>
                            <div className="keen-slider__slide number-slide3"><img src="https://i.ibb.co.com/9WPdPgr/news.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;