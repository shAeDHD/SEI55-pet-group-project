import React from 'react'
import axios from 'axios'

// set backend url
const BASE_BACKEND_URL = 'http://localhost:3000'

class MyProfile extends React.Component{

    // set states for each profile - current user with name and email
  state = {
    currentUser: {
      name: '',
      email: ''
    }
  }

  // function to run a loading page
  componentDidMount(){
    // set the token value - authenication 
    let token = "Bearer " + localStorage.getItem("jwt");
    // axios get request 
    axios.get(`${BASE_BACKEND_URL}/users/current`, {
      headers: {
        'Authorization': token
      }
    })
    // successful load gets res data and sets it to current user
    .then(res => {
      this.setState({currentUser: res.data})
    })
    .catch(err => console.warn(err))
  }

    // render simple greeting with user name
  render(){
    return(
      <div>
        <h1>Hello {this.state.currentUser.name}</h1>
        <h4>Your email is {this.state.currentUser.email}</h4>
      </div>
    );
  }//render

}//class MyProfile


export default MyProfile