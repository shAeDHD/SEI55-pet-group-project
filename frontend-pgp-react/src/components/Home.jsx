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

// -------- Critter Related Imports ------------ //
import DudeCritterAnimations from './DudeCritterAnimations.jsx';
import OwletCritterAnimations from './OwletCritterAnimations.jsx';
import PinkCritterAnimations from './PinkCritterAnimations.jsx';
// --------------------------------------------- //

// backend url
const BASE_BACKEND_URL = 'http://localhost:3000';

class Home extends React.Component {

    // home states
    state ={
        // define current user
        currentUser: undefined

    };

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
                    <br /><br />
                    <h1>We shall decide</h1>
                    <nav>
                    {/* Links to various pages */}
                    <Link to="/">Home</Link>
                    {''} | {''}
                    <Link to="/pet">Pets</Link>
                    {''} | {''}
                    <Link to="/accessories">Accessories</Link>
                    {''} | {''}
                    <Link to="/users">Users</Link>
                    <br/>
                    
                    <Link to="/dude_critter">Dude Critter Animation Testing</Link>
                    {'	'}|{'	'}
                    <Link to="/owlet_critter">Owlet Critter Animation Testing</Link>
                    {'	'}|{'	'}
                    <Link to="/pink_critter">Pink Critter Animation Testing</Link>
                    </nav>

                { /*  Critter Animations  */ }
                {/* <DudeCritterAnimations/> */}
                {/* <OwletCritterAnimations/> */}
                {/* <PinkCritterAnimations/> */}
                {/* 
                    * FOR INSTRUCTIONS ON CRITTER ANIMATION USAGE * 
                    *      CHECK THE CORRESPONDING .css FILE.     * 
                    
                    eg. DudeCritter.css 
                */}

                </header>
                {/* Routes to the various pages */}
                    {/* change below */}
                    {/* <Route exact path="/" component={SignUp}/> */}
                    {/* <Route exact path="/signup" component={SignUp}/> */}
                    <Route exact path="/my_profile" component={MyProfile}/>
                    <Route exact path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser}{...props}/>}/>
                    <Route exact path='/signup' render={(props) => <SignUp setCurrentUser={this.setCurrentUser}{...props}/>}/>
                    <Route exact path="/users" component={User}/>
                    <Route exact path="/accessories" component={Accessories}/>
                    {/* <Route exact path="/pet" component={Pet}/> */}
                    <Route exact path="/dude_critter" component={DudeCritterAnimations}/>
                    <Route exact path="/owlet_critter" component={OwletCritterAnimations}/>
                    <Route exact path="/pink_critter" component={PinkCritterAnimations}/>
            </Router>
            </div>
 
        ); // return

    } // render


} // Home 

export default Home