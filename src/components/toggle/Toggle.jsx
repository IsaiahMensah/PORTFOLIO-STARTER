import React from "react"
import './Toggle.css'
import {BsFillSunFill} from 'react-icons/bs'
import {GiMoon} from 'react-icons/gi'
function Toggle(){
    return(
        <div className="toggle">
            <BsFillSunFill/>
            <GiMoon/>
            <div className="t-button">
                
            </div>
        </div>
    )
}

export default Toggle