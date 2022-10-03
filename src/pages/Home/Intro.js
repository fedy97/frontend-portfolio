import React from 'react';

function Intro() {
    return (
        <div className={"h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10"}>
            <h1 className={"text-secondary font-bold text-4xl sm:text-2xl"}>Hi, I am Federico Morreale,</h1>
            <h1 className={"text-white font-bold text-4xl sm:text-2xl"}>I am a Software Engineer.</h1>
            <p className={"text-tertiary w-2/3"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className={"hover:text-white text-tertiary border rounded py-3 px-5"}>Get Started.</button>
        </div>
    );
}

export default Intro;