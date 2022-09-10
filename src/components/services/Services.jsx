import React from "react"
import './Services.css'
import heartemoji from '../../img/heartemoji.png'
import glasses from '../../img/glasses.png'
import humble from '../../img/humble.png'
import Card from '../../components/Card/Card'

function Services(){
    return(
        <div className="services">
            <div className="awesome1">
                <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing  <br /> elit. Cum iure nesciunt neque, accusamus exercitationem <br /> eaque laboriosam adipisci necessitatibus <br /> reiciendis esse debitis! Impedit soluta architecto <br /> facilis itaque? Laboriosam quam officia dignissimos.</span>
                </div>
                <a href="https://resumegenius.com/wp-content/uploads/Minimalist-Professional-Resume-Templates-Download-Word-New.zip">
                    <button className="button s-button">Download CV</button>
                </a>

                <div className="blur s-blur"></div>
                
            </div>
            
                
            <div className="cards">
                <div className="card1">
                    <Card 
                    emoji = {heartemoji}
                    heading = {'Design'}
                    detail = {'Figma,Sketch,Adobe,  Adobe xd'}
                    />
                </div>
                 <div className="card2">
                 <Card 
                    emoji = {glasses}
                    heading = {'Design'}
                    detail = {'Html,Css,JavaScript,  React'}
                    />
                 </div>
                 <div className="card3">
                 <Card 
                    emoji = {glasses}
                    heading = {'UI/UX'}
                    detail = {'Lorem ipsum dolor, sit amet consectetur adipisicing   '}
                    />
                 </div>
            </div>
        </div>

        

    )
}

export default Services