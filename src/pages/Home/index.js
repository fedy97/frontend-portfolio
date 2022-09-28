import React from 'react';
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";

const Home = () => {
    return (
        <div>
            <Header/>
            <div className={"px-20 sm:px-5 bg-primary"}>
                <Intro/>
                <About/>
                <Experiences/>
            </div>
        </div>
    );
};

export default Home;
