import React from "react";
import axios from 'axios';

import dude4 from "../assets/dudeMonster/fourFrames_dude.png";
import pink4 from "../assets/pinkMonster/fourFrames_pink.png";
import owlet4 from "../assets/owletMonster/fourFrames_owlet.png";

const BASE_CREATECRITTER_URL = 'http://localhost:3000'
// species2: 'dude4',
// species3: 'owlet4',

class CreateCritter extends React.Component{

    state = {

        currentUser: '',
        // frame: '4',
        // action: 'idle',
        species: 'pink4',
        // species2: 'dude4',
        // species3: 'owlet4',
        // classname: 'pink4',
        clickCount: 0,
        name:'',
        // age: 1, 
        // level: 1, 
        // experience:1,
        // last_fed: 0,
        // last_fought: 0,
        // last_slept: 0, 
        // last_stretched: 0,
        // last_drank: 0, 
        loading: true,
        error: null

    }


    renderSelection = {

        'dude4': dude4,
        'pink4': pink4,
        'owlet4': owlet4,

    }

    count = () => {

        if (this.state.clickCount == 0){
            this.setState ({species: "pink4"});
            console.log('pink4', this.state.species);
        } else if (this.state.clickCount == 1){
            this.setState ({species: "dude4"});
            console.log('dude4', this.state.species);
        } else{
            this.setState ({species: "owlet4"});
            console.log('owlet4', this.state.species);
        }

    };

    submitLeft = () =>{

        console.log('left click');
        if (this.state.clickCount <= 0){
            return
        } else{
            this.state.clickCount --
            this.count();
        }

    };

    submitRight = () =>{

        console.log('right click');
        if (this.state.clickCount >= 2){
            return
        } else{
            this.state.clickCount ++
            this.count();
        }

    };

    critterName = (ev) => {
        
        this.setState({name: ev.target.value});
        console.log('name:', ev.target.value)
        
    };

    
    // submit new users specify selection
    submitNewCritter = async (ev) => {

        console.log('new user species', this.state.species);

        ev.preventDefault();

        try{

            const submitNewPet = await axios.post(

                `${BASE_CREATECRITTER_URL}/pets`, {
                name:this.state.name,
                age:this.state.age,
                level:this.state.level,
                experience:this.state.experience,
                species:this.state.species,
                last_fed:this.state.last_fed,
                last_fought:this.state.last_fought,
                last_slept:this.state.last_slept, 
                last_stretched:this.state.last_stretched,
                last_drank:this.state.last_drank

            })
            .then(result => {
                // localStorage.setItem("jwt", result.data.token.token)

                // console.log("jwt", result.data.token.token);
                // // set axios default headers to have an authorization key
                // axios.defaults.headers.common['Authorization'] = 'Bearer ' + result.data.token.token;
                // // call the function setCurrentUser that was passed in as a prop so that we can set the current user in Home
                // this.props.setCurrentUser();
                // redirec the url of the page to /my_profile so we can load the MyProfile component
                this.props.history.push('/my_profile');
                
            })

            console.log(submitNewPet);
        } catch(err){
            // TODO: add error validation if a missing field
            this.setState({
                loading: false, 
                error: err
            })

        }


       

    }

    render(){

        return (

            <div className="Create">
                
                <h1>Create your own Critter</h1>

                <div className={`${this.state.species}FramesViewbox pixelArt`} >

                    <img src={this.renderSelection[this.state.species]} alt="character" 
                        className={`
                        
                            idle
                            ${this.state.species}FramesSpriteSheet
                            pixelArt`

                        }/>
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
                <button onClick={this.submitLeft} className="left">Left</button>
                <button onClick={this.submitRight} className="right">Right</button>
                <br /><br />
                <br /><br />
                <form onSubmit = {this.submitNewCritter}>
               
                <input
                onChange={this.critterName}
                name="name"
                type="name"
                placeholder='Enter Pet Name'
                />
                <br /><br />
                <button className="select">Select Critter</button>
                </form>

            </div>

                // 'idle',
                // '4',
                // 'idle',
                // 800

        ) // return


    } // render


}

export default CreateCritter;