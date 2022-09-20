import React from 'react';
import App from "../App";


import FoodAndDrink from '../FoodAndDrink.css'
import generalFood from '../assets/FoodPack/general-food.png'
import vegetables from '../assets/FoodPack/vegetables.png'
import fruits from '../assets/FoodPack/fruits.png'
import drinks from '../assets/FoodPack/drinks.png'
import sweets from '../assets/FoodPack/sweets.png'

class FeedAndDrink extends React.Component {

    // Food button will random select from either generalFood, vegetables, fruits. 
    // After selection it will randomly pick a food sprite element to use.


    // Drink button will random select a drink sprite element to use from drinks.png


    // Sweets button will random select a sweet sprite element to use from sweets.png
    state = {

        sweetsInt: null,
        drinkInt: null,
        foodInt: null,
        randomInt: null,
    }

    randInt () {

        const min = 1;
        const max = 9;
        const rand = min + Math.random() * (max - min);
        this.setState({ randomInt: rand})

    }  
    
    giveSustenance = ( buttonClicked ) => {

        if (buttonClicked === 'food') {
            

        } else if (buttonClicked === 'drink' ) {


        } else {


        }


    }



    render (){

        return(
            
            <div>
                <h2>Food Animation Testing</h2>
                <button onClick={this.giveSustenance('food')}>
                    Food
                </button>
                <button onClick={this.giveSustenance('drink')}>
                    Drink
                </button>
                <button onClick={this.giveSustenance('sweets')}>
                    Sweets
                </button>

                {/* <button onClick={randInt}></button> */}

                <div className='sweets'>
                    <img src={sweets} alt="sweets" 
                    className={`
                        
                        pixelArt 
                        ${this.state.sweetsInt}
                    
                    `}/>
                </div>
            </div>
        
        );


    } // render


} // class FeedAndDrink


export default FeedAndDrink;