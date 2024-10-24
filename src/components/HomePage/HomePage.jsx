import Banner from "./Banner";
import DemoSetup from "./DemoSetup";
import Effort from "./Effort";
import Feature from "./Feature";
import Footer from "./Footer";
import Integration from "./Integration";
import Language from "./Language";
import Membership from "./Membership";
import Partnership from "./Partnership";
import Publishers from "./Publishers";

const HomePage = () => {

    return (
        <div className="relative">
            <Banner />
            <Membership />
            <div className="lg:fixed top-4 right-4 z-50 lg:pr-20">
                <DemoSetup />
            </div>
            <Feature />
            <Partnership />
            <Publishers />
            <Integration />
            <Effort />
            <Footer />
            <div className="fixed bottom-10 right-4 z-50 lg:pr-20">
                <Language />
            </div>
        </div>
    );
};

export default HomePage;