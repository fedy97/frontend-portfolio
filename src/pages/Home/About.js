import React from 'react';
import SectionTitle from "../../components/SectionTitle";
import {useSelector} from "react-redux";

function About() {
    const skills = useSelector((state) => state.portfolio.skillResponses);
    const personal = useSelector((state) => state.portfolio.personalResponse);
    return (
        <div className={"sm:pt-5 bg-primary"}>
            <SectionTitle title={"About"}/>
            <div className={"items-center flex w-full sm:flex-col"}>
                <div className={"h-[70vh] w-1/2 sm:w-full"}>
                    <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_obidsi0t.json"
                                   background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
                <div className={"w-1/2 sm:w-full flex flex-col gap-5"}>
                    {personal?.about && <p className={"text-white"}>{personal.about}</p>}
                </div>
            </div>
            <div className={"py-10"}>
                <h1 className={"text-tertiary text-2xl"}>My stack:</h1>
                <div className={"flex flex-wrap gap-5 py-5"}>
                    {skills && skills.map((skill) => (
                        <h1 key={skill.id} className={"text-tertiary border p-2"}>{skill["skillName"]}</h1>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;