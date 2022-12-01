import React from 'react';
import {useSelector} from "react-redux";

const LeftSider = () => {
    const personalInfo = useSelector((state) => state.portfolio.personalResponse);

    return (
        <div className={"fixed left-0 -bottom-20 pl-5 sm:static"}>
            <div className={"flex flex-col sm:justify-center sm:flex-row pb-10 gap-3 items-center"}>
                {personalInfo?.resumeLink && <a href={personalInfo.resumeLink} target="_blank"
                   rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="text-gray-400 hover:text-white w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"/>
                    </svg>
                </a>}
                {personalInfo?.linkedinLink && <a href={personalInfo.linkedinLink} target="_blank"
                   rel="noopener noreferrer">
                    <i className="ri-linkedin-box-fill hover:text-white text-gray-400 text-xl"></i>
                </a>}
                {personalInfo?.githubLink && <a href={personalInfo.githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="ri-github-fill hover:text-white text-gray-400 text-xl"></i>
                </a>}
                <div className={"sm:h-[0px] h-[70vh] w-[1px] bg-primary"}></div>
            </div>
        </div>
    );
};

export default LeftSider;
