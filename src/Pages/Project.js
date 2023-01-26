import React from "react";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function Project() {
  return (
    <div className="Main_header">
      <div className="subMain_header">
        <div className="HomeIcon_header">
          <BrowserRouter>
            <NavLink to="/Home"><HomeIcon/></NavLink>
            <Routes>
              <Route element={<Login />} excat path="Login" />
              <Route element={<Home />} excat path="Home" />
            </Routes>
          </BrowserRouter>
          <div className="dark_ModeIcon_header">
            <DarkModeIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
