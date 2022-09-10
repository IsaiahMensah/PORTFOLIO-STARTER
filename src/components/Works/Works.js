import React from 'react'
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import Fiverr from"../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

const Works = () => {
  return (
    <div className='works'>
        <div className="awesome1">
                <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & clients</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing  <br /> elit. Cum iure nesciunt neque, accusamus exercitationem <br /> eaque laboriosam adipisci necessitatibus <br /> reiciendis esse debitis! Impedit soluta architecto <br /> facilis itaque? Laboriosam quam officia dignissimos.</span>
                </div>
                <button className="button s-button">Hire Me</button>

                <div className="blur s-blur"></div>
                
            </div>
            {/* right side */}
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                    </div>
                   
                    <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                    </div>
                    <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                    </div>
                </div>
                {/* background circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
    </div>
  )
}

export default Works