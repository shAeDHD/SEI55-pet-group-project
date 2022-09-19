import React from 'react';
import DudeCritter from "../DudeCritter.css";

import dude4frames from "../assets/dudeMonster/fourFrames_dude.png";
import dude6frames from "../assets/dudeMonster/sixFrames_dude.png";
import dude8frames from "../assets/dudeMonster/eightFrames_dude.png";



class DudeCritterAnimations extends React.Component {

    // critterAnimation = ( src, spriteSheet, animation ) => {

    //     return(
    
    //         <img src={src} alt="character"
    //         className={`
    //         pixelArt
    //         ${spriteSheet}
    //         ${animation}
    //         `}
    //         />
    
    //         /*
    //         When invoked, the critterAnimation arguments 
    //         need to be as follows,
    //         ( img source, spriteSheetClass, animationClass )
    //         eg. 
    //         critterAnimation( dude4frames, dudeFourFramesSpriteSheet, punch)
    //         */ 
          
    //     )
    
    // }

    // state={
    //     fourFrameAnimation: '',

    // }

    // handleSubmit = ( event ) => {

    //     event.preventDefault();
    //     console.log(`Button Clicked:`, this.state.);
            

    // }


    render () {


        return(
            <div>
                <h3> Animations for Dude Critter </h3>
               {/* <div className="buttons">
                    <form onSubmit={this.handleSubmit}></form>
               </div> */}

                

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
                    sprint
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