import React from 'react'
import { Transition } from '@headlessui/react'





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
                <Transition
                    show={isActive}  
                    enter="transition-all ease-in-out duration-500 delay-[200ms]"
                    enterFrom="opacity-0 translate-y-6"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition-all ease-in-out duration-500 delay-[200ms]"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <div className="accordion-content"><span className="date-text">{dates}</span><br/>{content}</div>
                </Transition>
                </div>
            </div>
        </div>
    )
}