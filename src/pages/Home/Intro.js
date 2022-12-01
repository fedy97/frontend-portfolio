import React from 'react';
import {useSelector} from "react-redux";

function Intro() {
    const personalInfo = useSelector((state) => state.portfolio.personalResponse);
    return (
        <div className={"flex flex-row sm:flex-col justify-around items-center"}>
            <div className={"sm:h-[30vh] h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10 sm:py-0 sm:gap-0"}>
                {personalInfo?.firstName && personalInfo?.lastName &&
                    <h1 className={"text-secondary font-bold text-4xl sm:text-2xl"}>Hi, I
                        am {personalInfo.firstName.toString().toUpperCase()} {personalInfo.lastName.toString().toUpperCase()},</h1>}
                {personalInfo?.jobTitle &&
                    <h1 className={"text-white font-bold text-4xl sm:text-2xl"}>I am a {personalInfo.jobTitle}.</h1>}
                {personalInfo?.email && <a href={"mailto:" + personalInfo.email}>
                    <button className={"hover:text-white text-tertiary border rounded py-3 px-5"}>Contact Me</button>
                </a>}
            </div>
            {personalInfo?.photo && <div className={"flex sm:h-[50vh] sm:w-[40vh] h-[80vh]"}>
                <img className={"rounded-3xl"} src={personalInfo.photo} alt="Profile"/>
            </div>}
        </div>
    );
}

export default Intro;