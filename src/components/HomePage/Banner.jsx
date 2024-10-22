import { FaCheck } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="bg-primary">
            {/* logo */}
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold py-10 italic text-white">Adpushup</h2>
                <div className="">
                    <h2 className="text-5xl space-y-3 font-bold text-white max-w-1/2">Grow your ad revenue <br /> by more than 40% with <br /> Google's Premier <br /> Certified Publishing <br /> Partner</h2>
                    <div className="space-y-2 py-6">
                        <p className="flex items-center gap-2"><FaCheck className="text-2xl bg-green-600 text-white" /><span className="text-2xl text-white">Exclusive access to direct deals.</span></p>
                        <p className="flex items-center gap-2"><FaCheck className="text-2xl bg-green-600 text-white" /><span className="text-2xl text-white">Increased competition for your ad inventory.</span></p>
                        <p className="flex items-center gap-2"><FaCheck className="text-2xl bg-green-600 text-white" /><span className="text-2xl text-white">Ad fraud detection with Google policy compliance.</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;