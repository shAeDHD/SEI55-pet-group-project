import React from 'react';
import App from "../App";


import FoodAndDrink from '../FoodAndDrink.css'
import generalFood from '../assets/FoodPack/general-food.png'
import vegetables from '../assets/FoodPack/vegetables.png'
import fruits from '../assets/FoodPack/fruits.png'
import drinks from '../assets/FoodPack/drinks.png'
import sweets from '../assets/FoodPack/sweets.png'
import axios from 'axios';

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

    randInt = () => {

        const min = 1;
        const max = 10;
        const rand = Math.floor(min + Math.random() * (max - min));
        this.setState({ randomInt: rand})
        console.log(`randomInt = ${rand}`);  

    }  


    
    giveFood = async () => {
        console.log(`food gib`);
        
        // const foodItem

        try {
            // const res = await axios.post(`http://localhost:3000/pets/:${}/action/:action`)
        } catch (error) {
             
        }

    }



    render (){

        return(
            
            <div>
                <h2>Food Animation Testing</h2>
                <button onClick={this.giveFood}>
                    Food
                </button>
                <button onClick={this.giveDrink}>
                    Drink
                </button>
                <button onClick={this.giveSweets}>
                    Sweets
                </button>

                <button onClick={this.randInt}>randInt</button>

                <div className='sweets'>
                    <img src={sweets} alt="sweets" 
                    className={`
                        
                        pixelArt 
                        viewbox1
                    
                    `}/>
                </div>
            </div>
        
        );


    } // render


} // class FeedAndDrink


export default FeedAndDrink;