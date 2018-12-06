import React from 'react';
import './Team.css';

const team = (props) =>{
    return(
        <div className="team_div">
            <span className="team_span">{props.name}</span>
            <img className="team_img" src={props.img} alt={props.img}></img>
        </div>
        );
}

export default team;