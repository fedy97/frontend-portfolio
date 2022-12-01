import React from 'react';

const Loader = () => {
    return (
        <div className={"flex h-[90vh] w-full h-screen bg-primary items-center justify-center"}>
            <div className="lds-hourglass"></div>
        </div>
    );
};

export default Loader;
