import React from "react"
import './Navbar.css'
import Toggle from '../../components/toggle/Toggle';
function Navbar(){
    return(
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">MENSAH </div>
                    <Toggle/>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>Experience</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <button className='button n-button'>
                    Contact 
                </button>
            </div>
        </div>

    )
}

export default Navbar