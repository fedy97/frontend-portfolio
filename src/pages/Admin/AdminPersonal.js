import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {portfolioActions} from "../../redux/portfolioSlice";
import axios from 'axios';
import { Form, Input, Button, message } from "antd";


const AdminPersonal = () => {
    const dispatch = useDispatch();
    const personalInfo = useSelector((state)=>state.portfolio.personalResponse);
    const onfinish = async (values)=>{
        try {
            dispatch(portfolioActions.showLoading())
            const response = await axios.patch(process.env.REACT_APP_BASE_URL + "/api/personal/update", {
                ...values
            });
            dispatch(portfolioActions.hideLoading());
            if (response.data.success) {
                message.success(response.data);
            }else{
                message.error(response.data);
            }
        } catch (error) {
            dispatch(portfolioActions.hideLoading());
            message.error(error.message);
        }
    }
    return (
        <div>
            <Form
                onFinish={onfinish}
                layout="vertical"
                initialValues={personalInfo}
            >
                <Form.Item name="firstName" label="First Name">
                    <Input placeholder="Enter you First name" />
                </Form.Item>
                <Form.Item name="lastName" label="Last Name">
                    <Input placeholder="Enter your Last name" />
                </Form.Item>
                <Form.Item name="jobTitle" label="Job Title">
                    <Input placeholder="Enter your Job Title" />
                </Form.Item>
                <Form.Item name="email" label="Email">
                    <Input placeholder="Enter a Email" />
                </Form.Item>
                <Form.Item name="about" label="About">
                    <Input.TextArea placeholder="Enter Description" />
                </Form.Item>
                <Form.Item name="location" label="Location">
                    <Input placeholder="Enter Location" />
                </Form.Item>
                <Form.Item name="githubLink" label="GitHub">
                    <Input placeholder="Enter GitHub Link" />
                </Form.Item>
                <Form.Item style={{ float: "right" }}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AdminPersonal;
