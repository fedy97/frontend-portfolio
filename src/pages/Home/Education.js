import React from 'react';
import SectionTitle from "../../components/SectionTitle";
import {useSelector} from "react-redux";

function Education() {
    const [index, setIndex] = React.useState(0);
    const education = useSelector((state) => state.portfolio.educationResponses);
    return (
        <div className={""}>
            <SectionTitle title={"Education"}/>
            <div className={"flex items-center w-full justify-between sm:flex-col"}>
                <div className={"h-[70vh] nosm:p-10 w-1/2 sm:w-full"}>
                    <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_u4rzoljr.json"
                                   background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
                {education && <div className={"flex py-10 sm:w-full w-1/3 sm:flex-col"}>
                    <div
                        className={"flex flex-col sm:flex-row sm:mb-5 sm:overflow-x-scroll sm:scrollbar-thin sm:scrollbar-thumb-gray-700 sm:scrollbar-track-primary sm:overflow-x-scroll sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full gap-10 nosm:border-l-2 nosm:border-b-blue-400"}>
                        {education.map((exp, i) => (
                            <div key={exp.id} onClick={() => {
                                setIndex(i);
                            }} className={"cursor-pointer"}>
                                <h1 className={`text-xl px-5 ${i === index ? "text-white border-tertiary border-l-4 nosm:-ml-[2px] bg-gray-700 py-3" : "hover:text-white text-tertiary"} `}>{exp.startYear}</h1>
                            </div>
                        ))}
                    </div>
                    <div className={"flex flex-col gap-10 pl-20 sm:pl-0"}>
                        <h1 className={"text-secondary text-2xl"}>{education[index].title}</h1>
                        {education[index].link ? <a href={education[index].link} target="_blank"
                                                    rel="noopener noreferrer"><h1
                            className={"text-tertiary text-2xl"}>{education[index].location}</h1></a> : <h1
                            className={"text-tertiary text-2xl"}>{education[index].location}</h1>}
                        {education[index].grade && <p className={"text-white flex"}>{education[index].grade}</p>}
                    </div>
                </div>}

            </div>
        </div>
    );
}

export default Education;