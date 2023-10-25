import React from 'react'

export default function Card( {name, image, code, preview, bgColor, pills } ) {
    console.log(image)

    return (
       <div className="card">
            <div className="card-image-container" style={{backgroundColor: bgColor, backgroundImage: `url(${image})`}}>
                {/* <img src={image} className="card-image"/> */}
            </div>
        
            <h5 className="card-name">{name}</h5>
            <div className="card-pills-container">
                
                {pills.map(pill => (
                    <div className="card-pill">
                        <h6>{pill}</h6>
                     </div>    
                ))}
            </div>
            <div className="card-link-container">
                <a href={code}>View Code</a>
                <a href={preview}>Live Preview</a>
             </div>
        </div>
    )
}