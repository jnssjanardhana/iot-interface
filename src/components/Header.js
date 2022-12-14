import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "./images/logo.png";

function Header() {
  return (
    <div className = "header">
      <img src = {logo} alt = " " />
      <h1>Smart Water Grid</h1>
      <div className = "options">
        <Link to = "/values">Pressure Values</Link>
        <Link to = "/graph">Pressure Graph</Link>
      </div>
    </div>
  )
}

export default Header
