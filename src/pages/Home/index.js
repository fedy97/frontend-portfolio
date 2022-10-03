import React from 'react';
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import Loader from "./Loader";

const Home = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    return (
        <div>
            <Header/>
            {isLoading ? <Loader/> : <div className={"px-20 sm:px-5 bg-primary"}>
                <Intro/>
                <About/>
                <Experiences/>
                <Contact/>
                <Footer/>
                <LeftSider/>
            </div>}

        </div>
    );
};

export default Home;
