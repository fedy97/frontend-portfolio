import React from 'react';
import SectionTitle from "../../components/SectionTitle";
import experiences from "../../resources/experiences";

function Experiences() {
    const [index, setIndex] = React.useState(0);
    return (
        <div className={""}>
            <SectionTitle title={"Experiences"}/>
            <div className={"flex py-10"}>
                <div className={"flex flex-col gap-10 border-l-2 border-b-blue-400"}>
                    {experiences.map((exp, i) => (
                        <div key={exp._id} onClick={() => {
                            setIndex(i);
                            console.log(i === index);
                        }} className={"cursor-pointer"}>
                            <h1 className={`text-xl px-5 ${i === index ? "text-white border-tertiary border-l-4 -ml-[3px] bg-gray-700 py-3" : "text-tertiary"} `}>{exp.period}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experiences;