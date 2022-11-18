import React from 'react';
import Header from "../../components/Header";
import {Tabs} from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";

const Admin = () => {
    const items = [
        {label: 'Intro', key: 'item-1', children: <AdminIntro/>}, // remember to pass the key prop
        {label: 'About', key: 'item-2', children: <AdminAbout/>},
    ];
    return (
        <div>
            <Header/>
            <div className={"px-5"}>
                <Tabs items={items}/>
            </div>
        </div>
    );
};

export default Admin;
