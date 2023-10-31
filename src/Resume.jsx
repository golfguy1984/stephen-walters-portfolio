import React from 'react'





export default function resume( {company, content, title, dates} ) {
    
    const [isActive, setIsActive] = React.useState(false);
    
    // const styles = {
    //     backgroundColor: isActive ? '#2869CF' : '#EFF4FC',
    //     color: isActive ? 'white' : 'black',
    // }

    //set the styl here for the the bg color of the accordian if active
    
    return (
        <div>
            <div className="accordion">
                <div className="accordion-item">
                <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <div>{company}<br/><span className="title-text">{title}</span></div>
                    <div>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="accordion-content"><span className="date-text">{dates}</span><br/>{content}</div>}
                </div>
            </div>
        </div>
    )
}