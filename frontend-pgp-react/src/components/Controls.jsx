import React from 'react';


class Controls extends React.Component {

    critterJump = () => {
        
        this.props.updateAction( '8', 'jump' )
        console.log(`Critter jumped`);
        
    }

    critterKo = () => {
        
        this.props.updateAction( '8', 'ko' )
        console.log(`Critter KO'd!`);
        
    }

    critterWalkPunchWalk = () => {
        
        this.props.updateAction( '6', 'walkPunchWalk' )
        console.log(`Critter walked and punched!`);
        
    }

    render (){


        return(
            <div>
                
                <button onClick={this.critterJump}>Critter Jump</button>
                <button onClick={this.critterKo}>Critter K.O</button>
                <button onClick={this.critterWalkPunchWalk}>Critter Punch-walk</button>


                
            </div>
        );


    } // render


} // class Controls


export default Controls;