import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        
        <div className="container">
            <div className="row">
                <div className="col-md-3">
        <h2>Dashboard</h2>
            <Link to={'users'}>Users</Link>
            <Link to={'admin'}>Admins</Link>
                </div>
                <div className="col-md-9">
                    <Outlet/>                    
                </div>
            </div>
        </div>
    )
};

export default Dashboard;
