import React from 'react';
import SectionTitle from "../../components/SectionTitle";
import {useSelector} from "react-redux";

function Experiences() {
    const [index, setIndex] = React.useState(0);
    const experiences = useSelector((state) => state.portfolio.experienceResponses);
    return (
        <div className={""}>
            <SectionTitle title={"Experiences"}/>
            <div className={"flex items-center w-full sm:flex-col"}>
                {experiences && <div className={"flex py-10 sm:w-full w-1/2 nosm:pl-10 sm:flex-col"}>
                    <div
                        className={"flex flex-col sm:flex-row sm:mb-5 sm:overflow-x-scroll sm:scrollbar-thin sm:scrollbar-thumb-gray-700 sm:scrollbar-track-primary sm:overflow-x-scroll sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full gap-10 nosm:border-l-2 nosm:border-b-blue-400"}>
                        {experiences.map((exp, i) => (
                            <div key={exp.id} onClick={() => {
                                setIndex(i);
                            }} className={"cursor-pointer"}>
                                <h1 className={`text-xl px-5 ${i === index ? "text-white border-tertiary border-l-4 nosm:-ml-[2px] bg-gray-700 py-3" : "hover:text-white text-tertiary"} `}>{exp.startYear}</h1>
                            </div>
                        ))}
                    </div>
                    <div className={"flex flex-col gap-10 pl-20 sm:pl-0"}>
                        <h1 className={"text-secondary text-2xl"}>{experiences[index].role}</h1>
                        {experiences[index].link ? <a href={experiences[index].link} target="_blank"
                                                      rel="noopener noreferrer"><h1
                            className={"text-tertiary text-2xl"}>{experiences[index].company}</h1></a> : <h1
                            className={"text-tertiary text-2xl"}>{experiences[index].company}</h1>}
                        <p className={"text-white"}>{experiences[index].description}</p>
                        {experiences[index].skills && <div
                            className={"flex flex-row text-white gap-2"}>Skills: {experiences[index].skills.map((skill) => (
                            <p key={skill} className={"text-white flex"}>{skill}</p>
                        ))}
                        </div>}
                    </div>
                </div>}
                <div className={"h-[70vh] w-1/2 sm:w-full"}>
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_cmaqoazd.json"
                                   background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
            </div>
        </div>
    );
}

export default Experiences;