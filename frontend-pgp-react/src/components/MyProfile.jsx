import React from 'react'
import axios from 'axios'
import CreateCritter from './CreateCritter'

// set backend url
const BASE_USER_PET_URL = 'http://localhost:3000/'

class MyProfile extends React.Component{

    // set states for each profile - current user with name and email
  state = {
    
    currentUser: [],
    currentPet: [],
    // currentUser: {
    //   name: '',
    //   display_name: '',
    //   email: ''
    // },
    // currentUserPet: {
    //   name: '',
    //   age: '',
    //   species: '',
    //   level: '',
    //   experience: '',

    // }
  }

  // Mount the data
  componentDidMount(){

    this.fetchUser();
    // this.fetchPet();

  };

    // function to run a loading page
    fetchUser = async() =>{

      try{
        const res = await axios.get(`${BASE_USER_PET_URL}/users/current`);
        console.log('Users:', res.data)

        this.setState({
            currentUser: res.data,
            loading: false
        });

    } // try
    catch( err ){
        console.log('Error Loading USER from API ', err);

        this.setState({
            loading: false,
            error: err // Store the required information for the render
        });
    }

} // fetch
    //   axios.get(`${BASE_USER_PET_URL}/users/current`
    //   )
    //   .then(res => {
    //     this.setState([currentUser, res.data])
        
    //     })
    //     .catch(err => console.warn(err))
        
    
    
    // }




  


    // // set the token value - authenication 
    // let token = "Bearer " + localStorage.getItem("jwt");
    // // axios get request current USER Info
    // axios.get(`${BASE_USER_PET_URL}/users/current`, {
    //   headers: {
    //     'Authorization': token
    //   }
    // })
    // axios get current Pet info
    // successful load gets res data and sets it to current user
  //   .then(res => {
  //     this.setState({currentUser: res.data})
  //   })
  //   .catch(err => console.warn(err))
  // }

    // render simple greeting with user name
  render(){
    return(
      <div>
        <h1>Hello {this.state.currentUser}</h1>
        <h3>{this.state.currentUser}</h3>
        {/* <h1>Hello {this.state.currentUser.name}</h1>
        <h3>{this.state.currentUser.display_name}</h3>
        <h1>Hello {this.state.currentUserPet.age}</h1> */}
      </div>
    );
  }//render

}//class MyProfile


export default MyProfile