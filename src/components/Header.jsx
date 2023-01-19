import React from 'react';

const Header = () => {
    //const personalInfo = useSelector((state) => state.portfolio.personalResponse);
    //const isAdminPage = useSelector((state) => state.portfolio.isAdminPage);
    return (
        <div className={"flex w-full bg-primary pt-5 px-5 justify-around"}>
            <h1 className={"text-secondary text-4xl font-semibold"}>Portfolio</h1>
        </div>
    );
};

export default Header;
