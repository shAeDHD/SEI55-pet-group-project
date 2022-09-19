import React from "react";
import axios from 'axios';
import OwletCritterAnimations from "./OwletCritterAnimations";
import PinkCritterAnimations from "./PinkCritterAnimations";
import DudeCritterAnimations from "./DudeCritterAnimations";
import Home from "./Home";
import dude4 from "../assets/dudeMonster/fourFrames_dude.png";
import pink4 from "../assets/pinkMonster/fourFrames_pink.png";
import owlet4 from "../assets/owletMonster/fourFrames_owlet.png";


import owlet4frames from "../assets/owletMonster/fourFrames_owlet.png";
import pink4frames from "../assets/pinkMonster/fourFrames_pink.png";
import dude4frames from "../assets/dudeMonster/fourFrames_dude.png";

// species2: 'dude4',
// species3: 'owlet4',

class CreateCritter extends React.Component{
    state = {
        currentUser: '',
        frame: '4',
        action: 'idle',
        species: 'pink4',
        species2: 'dude4',
        species3: 'owlet4',
        classname: 'pink4',
        clickCount: '',
        loading: true,
        error: null
    }

    renderSelection = {
        'dude4': dude4,
        'pink4': pink4,
        'owlet4': owlet4,
    }

    render(){

        return (

            <div className="Create">
                <h1>Create your own Criiter</h1>

                <div className={`${this.state.species}FramesViewbox pixelArt`} >
                <img src={pink4frames} alt="character" 
                    className={`
                    idle
                    ${this.state.species}FramesSpriteSheet
                    pixelArt`}/>
                </div>
                <br />
                {/* <div className="dude4FramesViewbox pixelArt" >
                    <img src={dude4frames} alt="character" 
                    className={`
                    idle
                    ${this.state.species2}FramesSpriteSheet
                    pixelArt`}/>
                </div>
                <br />
                <div className="owlet4FramesViewbox pixelArt" >
                    <img src={owlet4frames} alt="character" 
                    className={`
                    idle
                    ${this.state.species3}FramesSpriteSheet
                    pixelArt`}/>
                </div> */}

                <br /><br />
                <button className="left">Left</button>
                <button className="right">Right</button>
                <button className="select">Select Critter</button>
            </div>

// 'idle',
// '4',
// 'idle',
// 800

        ) // return

    } // render

}

export default CreateCritter