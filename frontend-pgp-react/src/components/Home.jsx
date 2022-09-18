import React from 'react';
import ReactDOM from 'react-dom/client';
import dudePet from '../dudePet.css';
import App from "../App";

import User from './User';
import Accessories from './Accessories';
import { Route, HashRouter as Router, Link } from "react-router-dom";

import dudeCritterAnimations from './DudeCritterAnimations.jsx';



class Home extends React.Component {


    render(){

        return (
            <div className="App"> 
            <Router>
                <header>
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
                    {'	'}|{'	'}
                    <Link to="/pets_test">Critter Animation Testing</Link>
                    </nav>


                <dudeCritterAnimations/>

                </header>
                {/* Routes to the various pages */}
                    <Route exact path="/users" component={User}/>
                    <Route exact path="/accessories" component={Accessories}/>
                    {/* <Route exact path="/pet" component={Pet}/> */}
                    <Route exact path="/pets_test" component={dudeCritterAnimations}/>
            </Router>
            </div>
 
        ); // return

    } // render


} // Home 

export default Home