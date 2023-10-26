import React from "react";
import {NavLink, useLocation } from "react-router-dom"

export default function NavBar(props) {
  return (
    <div>
      <span>Rick & Morty Episodes</span>
      <NavLink to='/home' style={({isActive})=> isActive ? {color:"coral"} : {color: "greenyellow"}}>
                <button>Home</button>
            </NavLink>
            <NavLink to='/home'>
                <button>Home</button>
            </NavLink>
            <NavLink to='/favorites'>
                <button>Favorites</button>
            </NavLink>
    </div>
  );
}