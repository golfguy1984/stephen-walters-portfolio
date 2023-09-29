import React from 'react'

export default function Card( {name, image, code, preview, bgColor } ) {
    
    
    return (
       <div className="card">
            <div className="card-image-container" style={{backgroundColor: bgColor}}>
                <img src="/tenzies" className="card-image"/>
            </div>
            <h5 className="card-name">{name}</h5>
            <div className="card-pills-container">
                <div className="card-pill">
                    <h6>React</h6>
                </div>
            </div>
            <div className="card-link-container">
                <a href="">View Code</a>
                <a href="">Live Preview</a>
             </div>
        </div>
    )
}