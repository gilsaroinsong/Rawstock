import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
// import About from "../../pages/About";
// import AddUser from "../../pages/AddUser";
import Dashboard from "../../pages/Dashboard";
import Profile from "../../pages/Profile";
import EditProfile from "../../pages/EditProfile";
import About from "../../pages/About";
import UploadImage from "../../pages/UploadImage";
import History from "../../pages/History";
// import loginKonsumen from "../../pages/LoginKonsumen";
import LoginKonsumen from "../../pages/LoginKonsumen";
import RegisterKonsumen from "../../pages/RegisterKonsumen";
import DashboardKonsumen from "../../pages/DashboardKonsumen";
import ProfileKonsumen from "../../pages/ProfileKonsumen";
import EditProfileKonsumen from "../../pages/EditProfileKonsumen";
import Transaksi from "../../pages/Transaksi";
import HistoryKonsumen from "../../pages/HistoryKonsumen";
import AboutKonsumen from "../../pages/AboutKonsumen";

const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/loginKonsumen" element={<LoginKonsumen />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/registerKonsumen" element={<RegisterKonsumen />}></Route>
        <Route path="/dashboard/:uid" element={<Dashboard />}></Route>
        <Route
          path="/dashboardKonsumen/:uid"
          element={<DashboardKonsumen />}
        ></Route>
        <Route path="/profile/:uid" element={<Profile />}></Route>
        <Route
          path="/profileKonsumen/:uid"
          element={<ProfileKonsumen />}
        ></Route>
        <Route path="/editProfile/:uid" element={<EditProfile />}></Route>
        <Route
          path="/editProfileKonsumen/:uid"
          element={<EditProfileKonsumen />}
        ></Route>
        <Route path="/about/:uid" element={<About />}></Route>
        <Route path="/aboutKonsumen/:uid" element={<AboutKonsumen />}></Route>
        <Route path="/Transaksi/:uid/:idGambar" element={<Transaksi />}></Route>
        <Route path="/upload/:uid" element={<UploadImage />}></Route>
        <Route path="/history/:uid" element={<History />}></Route>
        <Route
          path="/historyKonsumen/:uid"
          element={<HistoryKonsumen />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterConfig;
