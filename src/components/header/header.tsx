import React from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import { navConfig } from "../../routes.tsx";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header_title">
                <div className="header_logo"></div>
                <h1>La Taverne de Jade</h1>
            </div>
            <nav className="header_nav">
                <ul>
                    {navConfig.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    end
                                    className={({ isActive }) => (isActive ? 'active' : '')}
                                >
                                    <Icon className="icon" size={20} /> {item.label}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Header;