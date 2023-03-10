import React from 'react'
import '../css/Popup.css'


function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className="popupinner">
                {/* <button className='closeBtn' onClick={() => props.setTrigger(false)}>close</button> */}
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup