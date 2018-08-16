import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';
import {Link} from 'react-router-dom';
import './playerList.css';
import PlayerSearch from './player-search';
export class PlayersList extends React.Component{
    
   
    componentDidMount(){
        let category = 'std';
        let position = 'k';

        console.log('Component did mount');
        this.props.dispatch(fetchPlayers(category, position));
    }

    render(){

        return (
           <div> 
<div className ="row">

<div className="col-xl">
        <h1 className="sub-header">Kickers</h1>
        </div>
        </div>
        <nav className="header-nav">

        <div className ="row">
                <div className="col col-centered">
        <Link to='/std/overall'>OVR </Link> |
        <Link to='/qb'> QB </Link>|
        <Link to='/std/rb'> RB </Link>|
        <Link to='/std/wr'> WR </Link>|
        <Link to='/std/te'> TE </Link>|
        <b> K </b>|
        <Link to='/dst'> DST</Link> 
</div>
</div>
</nav>
            <PlayerSearch position="k"/>

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


export default connect(mapStateToProps)(PlayersList);