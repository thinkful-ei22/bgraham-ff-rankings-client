import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';
import {Link} from 'react-router-dom';
import './playerList.css';
import PlayerSearch from './player-search';
export class PlayersList extends React.Component{
    
   
    componentDidMount(){
        let category = 'std';
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
<div className="sub-header">
        <h1>Overall (Standard Scoring)</h1>
        Switch Scoring System to: <Link to={`${scoring}/${position}`}>PPR</Link> 
           
        <nav className="header-nav">
<br />
        <b>OVR </b> |
        <Link to='/qb'> QB </Link>|
        <Link to='/std/rb'> RB </Link>|
        <Link to='/std/wr'> WR </Link>|
        <Link to='/std/te'> TE </Link>|
        <Link to='/k'> K </Link>|
        <Link to='/dst'> DST</Link> 
</nav>
           
            </div>

       <PlayerSearch category="std" position="overall"/>

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