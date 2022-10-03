import React from 'react';
import SectionTitle from "../../components/SectionTitle";

function Contact() {
    const user = {
        name: 'Federico Morreale',
        birth: '06/05/1997',
        gender: 'male',
        email: 'frc.morreale@gmail.com',
        phone: '+393299135471',
        country: 'Italy'
    };
    return (
        <div>
            <SectionTitle title={"Contact Me!"}/>
            <div className={"flex flex-row items-center sm:flex-col"}>
                <div className={"text-tertiary"}>
                    <h1>{"{"}</h1>
                    {Object.keys(user).map((key) => (
                        <h1 className={"ml-5"}>
                            {key} : {key === 'email' ? <a href={"mailto:" + user[key]}>{user[key]}</a> : user[key]}
                        </h1>
                    ))}
                    <h1>{"}"}</h1>
                </div>
                <div className={"h-[70vh] nosm:w-2/3"}>
                    <a href={"mailto:" + user["email"]}>
                        <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_u25cckyh.json"
                                       background="transparent" speed="1" loop
                                       autoplay></lottie-player>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;