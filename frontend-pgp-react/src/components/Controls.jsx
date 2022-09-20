import React from 'react';


class Controls extends React.Component {
    
    
    /* -------------------------------------- */
    /*            *** INFO ***
        Each function below is tied to a
        button. When its button is pressed,
        the function passes data back to the
        parent [Home.jsx] file, which is used by the updateAction function to change the value of key:value pairs in state={} to make the Critter perform a different animation/action.  

        Each argument, and the value it affects, are explained below.
    */
    /* 
    ******    'updateAction()' arguments     ******
        
        firstArg = frameInteger of first action
        
        secondArg = first action 
        
        thirdArg = time between change from first to second action 
        
        fourthArg = second action 
        
        fifthArg = frameInteger of second action
    */
    /* -------------------------------------- */

    critterJump = () => {

        this.props.updateAction( 
            
            '8', 
            'jump',
            4800,  
            '4', 
            'idle' 
             
        )
        
        console.log(`Critter jumped`);
        
    } // critterJump


    critterKo = () => {

        // NOTE: this function is not configured,
        //       adjust settings as required.
        this.props.updateAction(
            
            '8', 
            'ko',  
            1600, 
            '4', 
            'idle'  

        )
        
        console.log(`Critter KO'd!`);
        
    } // critterKO


    critterWalkPunch = () => {
        
        this.props.updateAction(
            
            '6',
            'walkPunchWalk',
            1200, 
            '4',
            'idle'            

        )
        
        console.log(`Critter walked and punched!`);
        
    } // critterWalkPunchWalk

    critterHurt = () => {

        this.props.updateAction(

            '4',
            'hurt',
            800, 
            '4',
            'idle'

        )

    } // critterHurt


    critterWalk = () => {

        this.props.updateAction(

            '6',
            'walking',
            1200, 
            '6',
            'walking'

        )

    } // critterWalk


    critterStand = () => [

        this.props.updateAction(

            '4',
            'idle',
            800, 
            '4',
            'idle',

        )
    ] // critterStand


    /* -------------------------------------- */
    render (){


        return(

            <div>
                
                <div className="critterButtonContainer">
                    <button className="critterButton" 
                    onClick={this.critterJump}>
                        Jump
                    </button>
                    
                    <button className="critterButton"
                    onClick={this.critterKo}>
                        K.O'd
                    </button>
                    
                    <button className="critterButton" 
                    onClick={this.critterWalkPunch}>
                        Punch-walk
                    </button>

                    <button className="critterButton" 
                    onClick={this.critterHurt}>
                        Hurt
                    </button>

                    <button className="critterButton" 
                    onClick={this.critterWalk}>
                        Walk
                    </button>
                    
                    <button className="critterButton" 
                    onClick={this.critterStand}>
                        Stand
                    </button>

                </div>

            </div>
            
        );


    } // render


} // class Controls


export default Controls;