import React from "react";
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import IconButton from "@mui/material/IconButton";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import SearchIcon from "@mui/icons-material/Search";
import "./css/Header.css";

import ChatIcon from "@mui/icons-material/Chat";
import { useState, useEffect } from "react";
import { useTheme } from 'next-themes'
import { Input } from '@nextui-org/react';
import { Switch } from '@nextui-org/react';





function Header() {
  const { theme, setTheme } = useTheme()


  return (
    <div className="Main_header">
      <div className="header_left">
        <div className="chaticon">
          <ChatIcon />
        </div>
        <div className="search">
          {/* <div className="sv">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
            </svg> */}

          <form className="form">
         
             <Input size="sm" labelPlaceholder="Coming Soon..." />
          </form>
        </div>
      </div>
      <div className="header_right">
        <div className="button">
          
          <button className="button_header" type="button">
            login
          </button>
        </div>
        <div className="mode">
        <Switch onClick={() => setTheme ('light')}/>
       
      {/* <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
         */}
        
        </div>
      </div>
    </div>
  );
}

export default Header;
