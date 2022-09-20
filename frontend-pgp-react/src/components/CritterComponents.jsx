import React from 'react';
import '../App.css'

import DudeCritterAnimations from './DudeCritterAnimations.jsx';
import OwletCritterAnimations from './OwletCritterAnimations.jsx';
import PinkCritterAnimations from './PinkCritterAnimations.jsx';
import CritterType from './CritterType';
import CreateCritter from './CreateCritter';
import FeedAndDrink from './FeedAndDrink'

import Controls from './Controls';


class CritterComponents extends React.Component {
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

    updateAction = ( frames , action, timeout,  returnToFrame, returnToAction ) => {

        this.setState({ frameInteger: frames , animation: action })
        
        /* 
        The 'timeout' argument is the amount of miliseconds that
        */
        setTimeout( () => this.setState({ frameInteger: returnToFrame, animation: returnToAction }), timeout )  

    }

    render (){


        return(
            <div>
                <CritterType 
                    species={this.state.critterSpecies}
                    frame={this.state.frameInteger}
                    action={this.state.animation}    
                />

                <Controls 
                    updateAction={this.updateAction}
                />
            </div>
        );      // return()


    }           // render()


}               // class CritterComponents


export default CritterComponents;