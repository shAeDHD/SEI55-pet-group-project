import React from 'react';


class Controls extends React.Component {

    critterJump = () => {
        
        this.props.updateAction( '8', 'jump' )
        console.log(`Critter jumped`);
        

    }

    render (){


        return(
            <div>
                
                <button onClick={this.critterJump}>Critter Jump</button>
                
            </div>
        );


    } // render


} // class Controls


export default Controls;