import React from 'react';
import ReactDOM from 'react-dom/client';
import Pet from './Pet';
import User from './User';
import Accessories from './Accessories';
import { Route, HashRouter as Router, Link } from "react-router-dom";
import Login from './Login';
import MyProfile from './MyProfile';
import axios from 'axios';

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
                'Authoization': token
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
                            <h4><Link to='/login'>Login</Link></h4>
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
                    </nav>


                </header>
                {/* Routes to the various pages */}
                    <Route exact path="/my_profile" component={MyProfile}/>
                    <Route exact path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser}{...props}/>}/>
                    <Route exact path="/users" component={User}/>
                    <Route exact path="/accessories" component={Accessories}/>
                    <Route exact path="/pet" component={Pet}/>
            </Router>
            </div>
 
        ); // return

    } // render


} // Home 

export default Home