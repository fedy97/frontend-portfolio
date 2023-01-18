import React from 'react';
import {useSelector} from "react-redux";

const Header = () => {
    const personalInfo = useSelector((state) => state.portfolio.personalResponse);
    const isAdminPage = useSelector((state) => state.portfolio.isAdminPage);
    return (
        <div className={"flex w-full bg-primary pt-5 px-5 justify-around"}>
            <div className={"flex flex-row"}>
                {personalInfo?.firstName &&
                    <h1 className={"text-tertiary text-4xl font-semibold"}>{personalInfo.firstName.toString().substring(0, 1).toUpperCase()}</h1>}
            </div>
            <div className={"flex flex-row"}>
                {isAdminPage ?
                    <a href={"/"}>
                        <i className="ri-home-fill hover:text-white text-gray-400 text-xl"></i>
                    </a> : <a href={"/admin"}>
                        <i className="ri-admin-line hover:text-white text-gray-400 text-xl"></i>
                    </a>
                }
                <h1 className={"text-secondary text-4xl font-semibold"}>Portfolio</h1>
            </div>
            {personalInfo?.lastName &&
                <h1 className={"text-white text-4xl font-semibold"}>{personalInfo.lastName.toString().substring(0, 1).toUpperCase()}</h1>}
        </div>
    );
};

export default Header;
