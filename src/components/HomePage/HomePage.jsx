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
        <div>
            <Banner />
            <Membership />
            <div>
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