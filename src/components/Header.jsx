import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const personalInfo = useSelector((state) => state.portfolio.personalResponse);
    return (
        <div className={"flex justify-between bg-primary pt-5 px-5"}>
            {personalInfo?.firstName && <h1 className={"text-tertiary text-4xl font-semibold"}>{personalInfo.firstName.toString().substring(0,1).toUpperCase()}</h1>}
            <h1 className={"text-secondary text-4xl font-semibold"}>Portfolio</h1>
            {personalInfo?.lastName && <h1 className={"text-white text-4xl font-semibold"}>{personalInfo.lastName.toString().substring(0,1).toUpperCase()}</h1>}
        </div>
    );
};

export default Header;
