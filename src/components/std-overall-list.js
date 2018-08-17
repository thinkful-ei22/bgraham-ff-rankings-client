import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';
import {Link} from 'react-router-dom';
import './playerList.css';
import PlayerSearch from './player-search';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import { HeaderBar } from './header-bar';

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
               <HeaderBar />

               <div className ="row">

<div className="col-xl">
        <h1 className="sub-header">Overall (Standard Scoring)</h1>
        </div>
        </div>

 <nav className="header-nav">

<div className ="row">

<div className="col col-centered">
        Switch Scoring System to: <Link to={`${scoring}/${position}`}>PPR</Link> 
        </div>
        </div>
    
        <div className ="row">
        <div className="col col-centered">
        <b>OVR </b> |
        <Link to='/qb'> QB </Link>|
        <Link to='/std/rb'> RB </Link>|
        <Link to='/std/wr'> WR </Link>|
        <Link to='/std/te'> TE </Link>|
        <Link to='/k'> K </Link>|
        <Link to='/dst'> DST</Link> 
        </div>
</div>
</nav>

       <PlayerSearch category="std" position="overall"/>
<ScrollUpButton />
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