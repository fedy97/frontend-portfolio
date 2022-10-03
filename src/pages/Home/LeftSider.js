import React from 'react';

const LeftSider = () => {
    return (
        <div className={"fixed left-0 -bottom-20 pl-5 sm:static"}>
            <div className={"flex flex-col sm:justify-center sm:flex-row pb-10 gap-3 items-center"}>
                <a href={"https://www.facebook.com/fedy97"} target="_blank" rel="noopener noreferrer">
                    <i className="ri-facebook-circle-line hover:text-white text-gray-400 text-xl"></i>
                </a>
                <a href={"https://www.linkedin.com/in/federico-morreale-3a3071146/"} target="_blank" rel="noopener noreferrer">
                    <i className="ri-linkedin-box-fill hover:text-white text-gray-400 text-xl"></i>
                </a>
                <a href={"https://github.com/fedy97"} target="_blank" rel="noopener noreferrer">
                    <i className="ri-github-fill hover:text-white text-gray-400 text-xl"></i>
                </a>
                <div className={"sm:h-[0px] h-[70vh] w-[1px] bg-primary"}></div>
            </div>
        </div>
    );
};

export default LeftSider;
