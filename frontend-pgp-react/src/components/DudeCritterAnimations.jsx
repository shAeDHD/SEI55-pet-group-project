import React from 'react';
import DudeCritter from "../DudeCritter.css";

import dude4frames from "../assets/dudeMonster/fourFrames_dude.png";
import dude6frames from "../assets/dudeMonster/sixFrames_dude.png";
import dude8frames from "../assets/dudeMonster/eightFrames_dude.png";


class DudeCritterAnimations extends React.Component {


    render () {


        return(
            <div>
                <h3> Animations for Dude Critter </h3>
               
                <div className="dudeFourFramesViewbox pixelArt" >
                    <img src={dude4frames} alt="character" 
                    className="
                    idle
                    dudeFourFramesSpriteSheet
                    pixelArt"/>
                </div>

                <div className="dudeSixFramesViewbox pixelArt">
                    <img src={dude6frames} alt="character"
                    className="
                    walking
                    dudeSixFramesSpriteSheet 
                    pixelArt
                    "/>
                </div>

                <div className="dudeEightFramesViewbox pixelArt">
                    <img src={dude8frames} alt="character" 
                    className="
                    jump
                    dudeEigthFramesSpriteSheet
                    pixelArt
                    "/>
                </div>
            </div>
        );  // return()


    }       // render()


}           // class DudeCritterAnimations


export default DudeCritterAnimations;