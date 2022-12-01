import React, {useEffect} from 'react';
import Header from "../../components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSider from "./LeftSider";
import Loader from "./Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../redux/portfolioActions";
import Education from "./Education";
import Projects from "./Projects";

const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.portfolio.loading);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);


    return (
        <div className={""}>
            <Header/>
            {isLoading ? <Loader/> : <div className={"px-20 sm:px-5 bg-primary"}>
                <Intro/>
                <About/>
                <Experiences/>
                <Education/>
                <Projects/>
                <Contact/>
                <Footer/>
                <LeftSider/>
            </div>}

        </div>
    );
};

export default Home;
