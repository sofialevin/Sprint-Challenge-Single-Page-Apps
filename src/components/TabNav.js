import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
export default function TabNav() {
    return (
        <div>
            <div>
                <NavLink to="/">Home Page</NavLink>
            </div>
            <div>
                <NavLink to="/character">Characters</NavLink>
                </div>
            <div>
                <NavLink to="/location">Locations</NavLink>
                </div>
            <div>
                <NavLink to="/episode">Episodes</NavLink>
            </div>
        </div>
    )
};