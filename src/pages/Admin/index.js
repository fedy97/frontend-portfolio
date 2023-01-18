import React, {useEffect} from 'react';
import Header from "../../components/Header";
import {Tabs} from "antd";
import AdminPersonal from "./AdminPersonal";
import {useDispatch, useSelector} from "react-redux";
import AdminExperiences from "./AdminExperiences";
import AdminEducation from "./AdminEducation";
import AdminProjects from "./AdminProjects";
import {fetchData} from "../../redux/portfolioActions";
import Loader from "../Home/Loader";
import {portfolioActions} from "../../redux/portfolioSlice";

const Admin = () => {
    const items = [
        {label: 'Personal', key: 'item-2', children: <AdminPersonal/>},
        {label: 'Experiences', key: 'item-3', children: <AdminExperiences/>},
        {label: 'Education', key: 'item-4', children: <AdminEducation/>},
        {label: 'Project', key: 'item-5', children: <AdminProjects/>},
    ];
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.portfolio.loading);

    useEffect(() => {
        dispatch(fetchData());
        dispatch(portfolioActions.setIsAdminPage());
    }, [dispatch]);

    return (
        <div>
            <div className={""}>
                <Header/>
            </div>
            {isLoading ? <Loader/> : <div className={"px-5"}>
                <Tabs items={items}/>
            </div>}
        </div>
    );
};

export default Admin;
