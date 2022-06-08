import React from "react";
import "./card.css";

function Card() {
    return(
        <div className="card">
        <img src="https://runnersconnect.net/wp-content/uploads/2019/06/Katie-Zaferes-2-by-Tommy-Zaferes-e1560905773494.jpeg" className="card-image"/>
        <div className="card-stats">
        <img src="https://www.pngfind.com/pngs/m/45-454438_red-star-clip-art-rating-empty-star-png.png" className="star-review"/>
        <span>5.0</span>
        <span className="grey">(6).</span>
        <span className="grey">USA</span>
        </div>
        <p>Life lessons with Katie Zeferes</p>
        <p> <span className="bold">From $136 </span>/person</p>
    </div>
    );
}

export default Card;