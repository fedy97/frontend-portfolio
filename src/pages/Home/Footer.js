import React from 'react';

const Footer = () => {
    return (
        <div className={""}>
            <div className={"bg-tertiary w-full h-[1px]"}></div>
            <div className={"flex flex-col py-10 gap-5 text-white w-full items-center"}>
                <p>Site developed with React.js</p>
            </div>
        </div>
    );
};

export default Footer;
