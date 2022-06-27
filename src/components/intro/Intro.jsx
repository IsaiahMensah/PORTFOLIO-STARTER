import React from "react"
import './Intro.css'
import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png'
import instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import FloatingDiv from "../../components/FloatingDiv/FloatingDiv"
import thumbup from '../../img/thumbup.png'
import crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'



function Intro(){
    return(
        <div className="intro">
          <div className="i-left">
            <div className="i-name">
                <span>Welcome, I Am</span>
                <span>Isaiah Mensah</span>
                <span>Frontend Developer with high level of Experience in web designing and development producing quality work</span>
            </div>
                <button className=" button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/IsaiahMensah">
                        <img src={github} alt="" />
                    </a>

                    <a href="https://www.linkedin.com/in/isaiah-mensah-99a694232/">
                        <img src={linkedin} alt=""/>
                    </a>
                    <a href="https://www.instagram.com/jjay_lynn_99/">
                        <img src={instagram} alt="" /> 
                    </a>
                     
                     
                </div>
          </div>
          <div className="i-right">
              <img src={vector1} alt="" />
              <img src={vector2} alt="" />
              <img src={boy} alt="" />
              <img src={glassesimoji} alt="" />

              <div className='crown-position'>
                  <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
              </div>
              <div className="thumbup-position">
                  <FloatingDiv image={thumbup} tet1='Best Design' txt2='Award'/>
              </div>
              {/* blur divs */}
              <div className="blur"></div>
              <div className="blur"></div>
          </div>
        </div>

    )
}

export default Intro