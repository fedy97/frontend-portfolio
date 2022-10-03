import React from 'react';
import SectionTitle from "../../components/SectionTitle";

const skills = ["Skill1", "Skill2", "Skill3", "Skill4", "Skill5", "Skill6"]

function About() {
    return (
        <div className={"bg-primary"}>
            <SectionTitle title={"About"}/>
            <div className={"items-center flex w-full sm:flex-col"}>
                <div className={"h-[70vh] w-1/2 sm:w-full"}>
                    <lottie-player src="https://assets1.lottiefiles.com/private_files/lf30_obidsi0t.json"
                                   background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
                <div className={"w-1/2 sm:w-full flex flex-col gap-5"}>
                    <p className={"text-white"}>Praesent consequat feugiat elit vel feugiat. Donec mollis sem mi, eu
                        tristique dui eleifend id. Vestibulum ut justo nec erat faucibus aliquam. Proin sapien felis,
                        maximus non enim semper, laoreet ultrices mauris. Fusce placerat dolor et imperdiet pulvinar.
                        Integer at nulla vitae elit bibendum cursus nec vitae sapien. Nullam ullamcorper elit id elit
                        imperdiet egestas. Nunc porta quis eros nec faucibus. Vestibulum in ipsum consectetur, dictum
                        nisi
                        sit amet, lacinia risus. Aenean massa ante, tincidunt id libero id, euismod congue nibh. Sed
                        malesuada molestie varius. Nulla imperdiet tincidunt nisi a semper. Morbi finibus lectus ut enim
                        sodales, eu pharetra justo imperdiet. Donec at ultrices tellus, eget faucibus diam. Etiam nunc
                        purus, mattis vel congue sit amet, posuere et metus. Cras ut varius metus. </p>
                    <p className={"text-white"}>Aenean vitae ullamcorper dolor. Nunc pharetra nunc vitae nulla commodo aliquam. Nullam pulvinar
                        non ante eu posuere. Proin blandit quis mi vel scelerisque. Ut blandit turpis in tempor
                        pellentesque. Vivamus sit amet gravida mi. Quisque facilisis viverra venenatis. Sed sagittis
                        fringilla lacus at lacinia. Etiam maximus tristique nisl sed luctus. Duis eu imperdiet massa.
                        Donec quis purus nec ipsum pulvinar sodales id a ipsum. </p>
                </div>
            </div>
            <div className={"py-10"}>
                <h1 className={"text-tertiary text-2xl"}>My recent stack:</h1>
                <div className={"flex flex-wrap gap-5 py-5"}>
                    {skills.map((skill) => (
                        <h1 key={skill} className={"text-tertiary border p-2"}>{skill}</h1>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default About;