import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import "../index.css";

// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <Menu secondary>
            <Menu.Item><NavLink activeClassName="activeNavButton" exact to="/">Home Page</NavLink></Menu.Item>
            <Menu.Item><NavLink activeClassName="activeNavButton" to="/character">Characters</NavLink></Menu.Item>
            <Menu.Item><NavLink activeClassName="activeNavButton" to="/location">Locations</NavLink></Menu.Item>
            <Menu.Item><NavLink activeClassName="activeNavButton" to="/episode">Episodes</NavLink></Menu.Item>
        </Menu>
    )
};


