import React from 'react';

function SectionTitle({title}) {
    return (
        <div className={"flex flex-row gap-10 py-5 sm:py-10 items-center"}>
            <h1 className={"text-white text-3xl"}>{title}</h1>
            <div className={"sm:w-40 w-60 bg-tertiary h-[1px]"}></div>
        </div>
    );
}

export default SectionTitle;