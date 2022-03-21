import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
// import About from "../../pages/About";
// import AddUser from "../../pages/AddUser";
import Dashboard from "../../pages/Dashboard";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
