import Banner from "./Banner";
import Feature from "./Feature";
import Membership from "./Membership";
import Partnership from "./Partnership";
import Publishers from "./Publishers";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Membership />
            <Feature />
            <Partnership />
            <Publishers />
        </div>
    );
};

export default HomePage;