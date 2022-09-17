import React from 'react';
import ReactDOM from 'react-dom/client';
import Pet from './Pet';
import User from './User';
import Accessories from './Accessories';
import { Route, HashRouter as Router, Link } from "react-router-dom";






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
                    </nav>


                </header>
                {/* Routes to the various pages */}
                    <Route exact path="/users" component={User}/>
                    <Route exact path="/accessories" component={Accessories}/>
                    <Route exact path="/pet" component={Pet}/>
            </Router>
            </div>
 
        ); // return

    } // render


} // Home 

export default Home