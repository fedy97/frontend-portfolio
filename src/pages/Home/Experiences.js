import React from 'react';
import SectionTitle from "../../components/SectionTitle";
import experiences from "../../resources/experiences";

function Experiences() {
    const [index, setIndex] = React.useState(0);
    return (
        <div className={""}>
            <SectionTitle title={"Experiences"}/>
            <div className={"flex py-10 sm:flex-col"}>
                <div className={"flex flex-col sm:flex-row sm:mb-5 sm:overflow-x-scroll sm:scrollbar-thin sm:scrollbar-thumb-gray-700 sm:scrollbar-track-primary sm:overflow-x-scroll sm:scrollbar-thumb-rounded-full sm:scrollbar-track-rounded-full gap-10 nosm:border-l-2 nosm:border-b-blue-400"}>
                    {experiences.map((exp, i) => (
                        <div key={exp._id} onClick={() => {
                            setIndex(i);
                            console.log(i === index);
                        }} className={"cursor-pointer"}>
                            <h1 className={`text-xl px-5 ${i === index ? "text-white border-tertiary border-l-4 nosm:-ml-[2px] bg-gray-700 py-3" : "hover:text-white text-tertiary"} `}>{exp.period}</h1>
                        </div>
                    ))}
                </div>
                <div className={"flex flex-col gap-10 pl-20 sm:pl-0"}>
                    <h1 className={"text-secondary text-2xl"}>{experiences[index].title}</h1>
                    <h1 className={"text-tertiary text-2xl"}>{experiences[index].company}</h1>
                    <p className={"text-white"}>{experiences[index].description}</p>
                </div>
            </div>
        </div>
    );
}

export default Experiences;