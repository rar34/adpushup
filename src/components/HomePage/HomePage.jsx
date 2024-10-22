import Banner from "./Banner";
import Effort from "./Effort";
import Feature from "./Feature";
import Integration from "./Integration";
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
            <Integration />
            <Effort />
        </div>
    );
};

export default HomePage;