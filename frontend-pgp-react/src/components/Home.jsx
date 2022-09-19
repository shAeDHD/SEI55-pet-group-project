import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "../App";

import User from './User';
import Accessories from './Accessories';
import { Route, HashRouter as Router, Link } from "react-router-dom";
import Login from './Login';
import SignUp from './SignUp';
import MyProfile from './MyProfile';
import axios from 'axios';
import Controls from './Controls';

// -------- Critter Related Imports ------------ //
import DudeCritterAnimations from './DudeCritterAnimations.jsx';
import OwletCritterAnimations from './OwletCritterAnimations.jsx';
import PinkCritterAnimations from './PinkCritterAnimations.jsx';
import CritterType from './CritterType';
import CreateCritter from './CreateCritter';

// --------------------------------------------- //

// backend url
const BASE_BACKEND_URL = 'http://localhost:3000';

class Home extends React.Component {

    // home states
    state ={
        // define current user
        currentUser: undefined,

        /* 
        TODO set when a user is logged in:
        set.state.criterSpecies to User's Critter species
        */ 

        critterSpecies: 'dude',
        frameInteger: '4',
        animation:'idle'

         /* 
        ** AVAILABLE ANIMATIONS **
            frameInteger:       '4'      
                'punch'      
                'climbing'   
                'hurt'       
                'idle'       
                'throwStone' 
            frameInteger:       '6'
                'oneTwoCombo'
                'runHug'
                'sprint'
                'walking'
                'walkPunchWalk'
            frameInteger:       '8'
                'ko'
                'jump'    
            */ 
    };

    updateAction = ( frames , action, returnToFrame, returnToAction, timeout ) => {

        this.setState({ frameInteger: frames , animation: action })
        
        /* 
        The 'timeout' argument is the amount of miliseconds that
        */
        setTimeout( () => this.setState({ frameInteger: returnToFrame, animation: returnToAction }), timeout )  

    }
    

    // function to run on component mounting
    componentDidMount(){
        // loads when the page loads so it passes this function
        this.setCurrentUser();

    };

    // function to set the state of the current logged in user
    setCurrentUser = () => {
        //declare there is a token which hold a json web token
        let token = "Bearer" + localStorage.getItem("jwt");
        // axios request back end and check if logged in and use token to validate
        axios.get(`${BASE_BACKEND_URL}/users/current`, {
            headers: {
                'Authorization': token
            }
        })
        // if token validates set the state of current user
        .then(res => {
            this.setState({currentUser: res.data})
        })
        .catch(err => console.warn(err))
    };

    // function to handle the logging user out
    handleLogout = () => {
        // Set our state of current user to undefined.
        this.setState({currentUser: undefined});
        // Remove the jwt token from our local storage
        localStorage.removeItem("jwt");
        // Set our axios default headers to undefined.
        axios.defaults.headers.common['Authorization'] = undefined;
    };

    render(){

  



        return (
            <div className="App"> 
            <Router>
                <header>
                    {/* Showing on nav bar login/sign-up requests with if statement */}
                    {
                        this.state.currentUser !== undefined
                        ?
                        (
                            <div className='Login'>
                            {/* <h4>Welcome {this.state.currentUser.name}</h4> */}
                            <h4><Link to='/my_profile'>My Profile</Link>{' '}| {' '}<Link onClick={this.handleLogout} to='/'>Logout</Link></h4>
                            </div>
                        )
                        :
                        (
                            <div className='Login'>
                            <h4><Link to='/login'>Login</Link>{' '}|{' '}<Link to='/signup'>Sign Up</Link></h4>
                            </div>
                        )
                    }
                 
                    <h1>We shall decide</h1>
                    <nav>
                    {/* Links to various pages */}
                    <Link to="/">Home</Link>
                    {''} | {''}
                    <Link to="/pet">Pets</Link>
                    {''} | {''}
                    {/* <Link to="/accessories">Accessories</Link>
                    {''} | {''} */}
                    <Link to="/users">Users</Link>
                    {''} | {''}
                    <Link to="/createcritter">create</Link>
                    <hr />
                    </nav>

                </header>
                
                <div id="critterContainer">
                    
                    {/* 
                        * FOR INSTRUCTIONS ON CRITTER ANIMATION USAGE * 
                        *      CHECK THE CORRESPONDING .css FILE.     * 
                        
                        eg. DudeCritter.css 
                    */}

                    <CritterType 
                        species={this.state.critterSpecies}
                        frame={this.state.frameInteger}
                        action={this.state.animation}    
                    />

                    <Controls 
                        updateAction={this.updateAction}
                    />

                </div>
                {/* Below needs to be rendered on the create page didnt work so will render here for now */}
                <br /><br />
                <div className='createcritter'>
                    <CreateCritter />

                </div>

                {/* Routes to the various pages */}
                    {/* change below */}
                    {/* <Route exact path="/" component={SignUp}/> */}
                    {/* <Route exact path="/signup" component={SignUp}/> */}
                    <Route exact path="/createcriiter" component={CreateCritter}/>
                    <Route exact path="/my_profile" component={MyProfile}/>
                    <Route exact path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser}{...props}/>}/>
                    <Route exact path='/signup' render={(props) => <SignUp setCurrentUser={this.setCurrentUser}{...props}/>}/>
                    <Route exact path="/users" component={User}/>
                    {/* <Route exact path="/accessories" component={Accessories}/> */}
                    {/* <Route exact path="/pet" component={Pet}/> */}
                  <hr />
                  &copy; Critters.Co.2022
            </Router>
            </div>
 
        ); // return

    } // render


} // Home 

export default Home