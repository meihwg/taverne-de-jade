import React from "react";
import "./header.css";

import { HashRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import Wishes from "../../pages/wishes/wishes.tsx";

import { HouseLine } from "phosphor-react";
import { CalendarBlank } from "phosphor-react";
import { Sparkle } from "phosphor-react";
import { Gear } from "phosphor-react";
import { ChartBar } from "phosphor-react";

const Header: React.FC = () => {
    return (
        //<Router basename="/genshin">
        <Router>
            <header className="header">
                <div className="header_title">
                    <div className="header_logo"></div>
                    <h1>La Taverne de Jade</h1>
                </div>
                <nav className="header_nav">
                    <ul>
                        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                            <HouseLine className="icon" size={30} /> Home</NavLink>
                        </li>
                        <li> <NavLink to="/advancement" end className={({ isActive }) => isActive ? 'active' : ''}>
                            <ChartBar className="icon" size={30} /> Advancement</NavLink>
                        </li>
                        <li><NavLink to="/planner" end className={({ isActive }) => isActive ? 'active' : ''}>
                            <CalendarBlank className="icon" size={30} /> Planner</NavLink>
                        </li>
                        <li><NavLink to="/wishes" end className={({ isActive }) => isActive ? 'active' : ''}> 
                            <Sparkle className="icon" size={30} /> Wishes</NavLink>
                        </li>
                        <li><NavLink to="/settings" end className={({ isActive }) => isActive ? 'active' : ''}> 
                            <Gear className="icon" size={30} /> Settings</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="header-space"></div>
            <Routes>
                <Route path="/"  />
                <Route path="/advancement" />
                <Route path="/planner" />
                <Route path="/wishes" element={<Wishes />} />
                <Route path="/settings" />
            </Routes>
        </Router>
    );
};

export default Header;