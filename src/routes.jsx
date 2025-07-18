import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Dashboard/users";
import Blogs from "./pages/Blogs";
import SingleBlog from "./pages/Blogs/SingleBlog";
import Admins from "./pages/Dashboard/admin";
import Portfolio from "./pages/Portfolio";

const Approute = () => {
    return(
        <Routes>
            <Route path="/" index element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/portfolio" element={<Portfolio/>} />
            <Route path="/blogs" element={<Blogs/>} />
            <Route path="/blogs/:id" element={<SingleBlog />} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/dashboard" element={<Dashboard/>}>
                <Route path="users" element={<Users/>} />
                <Route path="admin" element={<Admins/>} />
            </Route>
        </Routes>
    )
}

export default Approute;