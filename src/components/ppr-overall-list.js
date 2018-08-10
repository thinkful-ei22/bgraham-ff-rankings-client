import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';
import {Link} from 'react-router-dom';
import './playerList.css';
import PlayerSearch from './player-search';
export class PlayersList extends React.Component{
    
   
    componentDidMount(){
        let category = 'ppr';
        let position = 'overall';

        console.log('Component did mount');
        this.props.dispatch(fetchPlayers(category, position));
    }

    render(){

        let scoring = this.props.location.pathname.includes('/std') ? '/ppr' : '/std'

        scoring = this.props.location.pathname === '/' ? '/ppr' : scoring

         let position= this.props.location.pathname.split('/')[2];

         position = typeof position === 'undefined' ? 'overall' : position

        return (
           <div> 
<div className="header-bar">
        <h1>Overall (PPR Scoring)</h1>
        Switch Scoring System to: <Link to={`${scoring}/${position}`}>Standard</Link> 
<nav className="header-nav">
<br />
        <b>OVR </b> |
        <Link to='/qb'> QB </Link>|
        <Link to='/ppr/rb'> RB </Link>|
        <Link to='/ppr/wr'> WR </Link>|
        <Link to='/ppr/te'> TE </Link>|
        <Link to='/k'> K </Link>|
        <Link to='/dst'> DST</Link> 
</nav>
<PlayerSearch category="ppr" position="overall"/>

            </div>
       
        </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('state', state);
    return {
        players: state.players.players,
        loading: state.players.loading,
        error: state.players.error
    };
};


export default connect(mapStateToProps)(PlayersList);