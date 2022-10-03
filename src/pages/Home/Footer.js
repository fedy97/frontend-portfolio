import React from 'react';

const Footer = () => {
    return (
        <div className={""}>
            <div className={"bg-tertiary w-full h-[1px]"}></div>
            <div className={"flex flex-col py-10 gap-5 text-white w-full items-center"}>
                <p>Designed and Developed By</p>
                <p>Federico Morreale</p>
            </div>
        </div>
    );
};

export default Footer;
