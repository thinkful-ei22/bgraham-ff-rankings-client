import React from 'react';
import {connect} from 'react-redux';
//import {fetchUpdatedPlayers} from '../actions/update-players';
import './playerList.css';

export class Expand extends React.Component {
    
render(){

    return (
<div className='expanded-view'>
           Projections:

            <li>{this.props.player.Name}</li>                  
            </div>
    );
}




    
}
const mapStateToProps = state => {
    return {
        players: state.players,
        loading: state.loading,
        error: state.error
    };
};


export default connect(mapStateToProps)(Expand);