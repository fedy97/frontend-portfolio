import React from 'react';
import TextArea from "antd/es/input/TextArea";
import {Button} from "antd";

const AdminIntro = () => {
    return (
        <div className={"form-block flex flex-col gap-5"}>
            <div className={"flex flex-col"}>
                <p>Welcome Text</p>
                <TextArea key={"welcome"}/>
            </div>
            <div className={"flex flex-col"}>
                <p>First Name</p>
                <TextArea key={"first-name"}/>
            </div>
            <div className={"flex flex-col"}>
                <p>Last Name</p>
                <TextArea key={"last-name"}/>
            </div>
            <div className={"flex flex-col"}>
                <p>Caption</p>
                <TextArea key={"caption"}/>
            </div>
            <div className={"flex flex-col"}>
                <p>Description</p>
                <TextArea key={"description"}/>
            </div>
            <div className={"flex flex-row justify-center pb-5"}>
                <Button className={"w-1/4"} type="primary" style={{ background: "#0A192F", borderColor: "white"}}>Update</Button>
            </div>
        </div>
    );
};

export default AdminIntro;
