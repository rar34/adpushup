import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import image1 from '../../assets/integration/1.JPG'
import image2 from '../../assets/integration/2.JPG'
import image3 from '../../assets/integration/3.JPG'

const Integration = () => {
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
        <div>
            <div className="container mx-auto flex p-2">
                <div className="w-full lg:w-2/3">
                    <h2 className="text-2xl font-medium my-10 text-gray-700">AdPushup Integrates with Your Current Ad Stack</h2>
                    <div className="my-24">
                        <div ref={sliderRef} className="keen-slider items-center max-w-2xl rounded-md bg-white p-5">
                            <div className="keen-slider__slide number-slide1"><img src={image1} alt="" /></div>
                            <div className="keen-slider__slide number-slide2"><img src={image2} alt="" /></div>
                            <div className="keen-slider__slide number-slide3"><img src={image3} alt="" /></div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/6">

                </div>
            </div>
        </div>
    );
};

export default Integration;