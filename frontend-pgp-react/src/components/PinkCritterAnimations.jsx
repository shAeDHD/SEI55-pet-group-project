import React from 'react';
import PinkCritter from "../PinkCritter.css";

import pink4frames from "../assets/pinkMonster/fourFrames_pink.png";
import pink6frames from "../assets/pinkMonster/sixFrames_pink.png";
import pink8frames from "../assets/pinkMonster/eightFrames_pink.png";


class PinkCritterAnimations extends React.Component {


    

    render () {


        return(
            <div>
                <h3> Animations for Pink Critter </h3>
                
                <div className="pinkFourFramesViewbox pixelArt" >
                    <img src={pink4frames} alt="character" 
                    className="
                    idle
                    pinkFourFramesSpriteSheet
                    pixelArt"/>
                </div>

                <div className="pinkSixFramesViewbox pixelArt">
                    <img src={pink6frames} alt="character"
                    className="
                    walking
                    pinkSixFramesSpriteSheet 
                    pixelArt
                    "/>
                </div>

                <div className="pinkEightFramesViewbox pixelArt">
                    <img src={pink8frames} alt="character" 
                    className="
                    jump
                    pinkEigthFramesSpriteSheet
                    pixelArt
                    "/>
                </div>
            </div>
        );  // return()


    }       // render()


}           // class PinkCritterAnimations


export default PinkCritterAnimations;