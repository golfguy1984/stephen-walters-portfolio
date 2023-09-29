import React from 'react'


export default function Techtile(props) {
    return (
        <div className="tech-stack-tile">
            <div className="tech-tile-wrapper">
                <img src={props.img}/>
                <h5 className="tech-tile-text">{props.name}</h5>
            </div>
        </div>
    )
}