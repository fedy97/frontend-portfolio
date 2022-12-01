import React from 'react';
import SectionTitle from "../../components/SectionTitle";
import {useSelector} from "react-redux";

function Projects() {
    const projects = useSelector((state) => state.portfolio.projectResponses);
    return (<div className={""}>
        <SectionTitle title={"Projects"}/>
        <div className={"flex items-center w-full sm:flex-col"}>
            {projects && <div className={"flex flex-col sm:w-full w-1/2 gap-5 nosm:pl-10"}> {projects.map((proj) => (
                <div key={proj.id} className={"flex flex-col gap-5"}>
                    {proj.link ? <a href={proj.link} target="_blank"
                                    rel="noopener noreferrer"><h1
                        className={"text-tertiary text-2xl"}>{proj.title}</h1></a> : <h1
                        className={"text-tertiary text-2xl"}>{proj.title}</h1>}
                    <p className={"text-white"}>{proj.description}</p>
                    {proj.stack && <div
                        className={"flex flex-row text-white gap-2"}>Stack: {proj.stack.map((stack) => (
                        <p key={stack} className={"text-white flex"}>{stack}</p>))}
                    </div>}
                </div>))}</div>}
            <div className={"h-[70vh] w-1/2 sm:w-full"}>
                <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_ymyikn6l.json"
                               background="transparent" speed="1" loop autoplay></lottie-player>
            </div>
        </div>
    </div>);
}

export default Projects;