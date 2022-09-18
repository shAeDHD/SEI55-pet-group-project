import React from 'react'
import axios from 'axios'

const BASE_SIGNUP_URL = 'http://localhost:3000'

class SignUp extends React.Component{

    // define the states
    state = {
        name: '',
        email: '',
        password: '',
        display_name: ''

    }

    // handle typing in the form
    handleInput = (ev) => {
        switch(ev.target.name){
            case 'name':
                this.setState({name: ev.target.value})
                console.log("name:", ev.target.value);
                break;
            case 'display_name':
                this.setState({display_name: ev.target.value})
                console.log("display_name:", ev.target.value);
                break;
            case 'email':
                this.setState({email: ev.target.value})
                console.log("email:", ev.target.value);
                break;
            case 'password':
                this.setState({password: ev.target.value})
                console.log("password:", ev.target.value);

        }


    } // handleInput

    // handle submitting the form
    handleSubmit = (ev) => {
        // create a request object to send to knock
        const request = {'name': this.state.name, 'display_name': this.state.display_name, 'email': this.state.email, 'password': this.state.password}

        // do a axios post request to send signup/new user details to rails
        axios.post(`${BASE_SIGNUP_URL}/user/signup`, {auth: request})
        .then(result =>{
            this.props.setCurrentUser();
            this.props.history.push('/my_profile');
        })
        .catch(err => {
            console.log('sign-up failed');
            console.warn(err);
        })
        ev.preventDefault();

    }; // handleSubmit

    render () {

        return(
            <form onSubmit={this.handleSubmit}>
            <label>Sign-Up Form</label>
            <br/>
            <input
              onChange={this.handleInput}
              name="name"
              type="name"
              placeholder='Enter Name'
            />
            <br/>
            <input
              onChange={this.handleInput}
              name="display_name"
              type="display_name"
              placeholder='Enter Display Name'
            />
            <br/>
            <input
              onChange={this.handleInput}
              name="email"
              type="email"
              placeholder='Enter Email'
            />
            <br/>
            <input
              onChange={this.handleInput}
              name="password"
              type="password"
              placeholder='Enter Password'
            />
            <br/>
            <button>Sign Up</button>
          </form>

        ); // return
    } // render
} // class

export default SignUp