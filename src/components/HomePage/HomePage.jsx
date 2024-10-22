import Banner from "./Banner";
import DemoSetup from "./DemoSetup";
import Effort from "./Effort";
import Feature from "./Feature";
import Footer from "./Footer";
import Integration from "./Integration";
import Membership from "./Membership";
import Partnership from "./Partnership";
import Publishers from "./Publishers";

const HomePage = () => {
    return (
        <div className="relative">
            <Banner />
            <Membership />
            <div className="static lg:sticky top-0 bottom-4 right-4 lg:pr-20 z-50 flex justify-end">
                <DemoSetup />
            </div>
            <Feature />
            <Partnership />
            <Publishers />
            <Integration />
            <Effort />
            <Footer />
        </div>
    );
};

export default HomePage;