import React from 'react';
import SectionTitle from "../../components/SectionTitle";
import {useSelector} from "react-redux";

function Contact() {
    const personalInfo = useSelector((state) => state.portfolio.personalResponse);
    const fields = ["firstName", "lastName", "birth", "phoneNumber", "email", "location"]
    return (<div>
        <SectionTitle title={"Contact Me!"}/>
        <div className={"flex items-center w-full justify-between sm:flex-col"}>
            <div className={"h-[70vh] w-1/2 nosm:p-10 sm:w-full"}>
                <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_u25cckyh.json"
                               background="transparent" speed="1" loop
                               autoplay></lottie-player>
            </div>
            <div className={"flex flex-row items-center sm:w-full w-1/3 sm:flex-col sm:pb-10"}>
                <div className={""}>
                    <h1 className={"text-white"}>{"{"}</h1>
                    {Object.keys(personalInfo).map((key) => (fields.includes(key) && personalInfo[key] &&
                        <h1 key={key} className={"ml-5 text-white"}>
                            {key} : {key === 'email' ?
                            <a href={"mailto:" + personalInfo[key]}>{personalInfo[key]}</a> : personalInfo[key]}
                        </h1>))}
                    <h1 className={"text-white"}>{"}"}</h1>
                </div>
            </div>
        </div>
    </div>);
}

export default Contact;