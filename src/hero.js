import React from "react";
import photo from "./photo-grid.jpg"
import "./hero.css";

function Main() {
    return(
        <div className="hero">
        <img src={photo} className="hero-image"/>
        <h1 className="hero-header">Online Experiences</h1>
        <p className="hero-text">Join unique interactive activities led by one-of-a kind hosts-all without leaving home.</p>
        </div>
    );
}
export default Main;
