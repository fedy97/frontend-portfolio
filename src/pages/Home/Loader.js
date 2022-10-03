import React from 'react';

const Loader = () => {
    return (
        <div className={"flex h-[90vh] w-screen bg-primary items-center justify-center"}>
            <div className="lds-hourglass"></div>
        </div>
    );
};

export default Loader;
