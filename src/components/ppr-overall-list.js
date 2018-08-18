import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';
import {Link} from 'react-router-dom';
import './playerList.css';
import './float-grid.css';
import PlayerSearch from './player-search';
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here
import { HeaderBar } from './header-bar';
export class PlayersList extends React.Component{
    
   
    componentDidMount(){
        let category = 'ppr';
        let position = 'overall';
        console.log('Component did mount');
        this.props.dispatch(fetchPlayers(category, position));
    }

    render(){

       

        return (
<div>
<HeaderBar />

<div className ="row">
<div className="col-xl">

        <h1 className="sub-header">Overall (PPR Scoring)</h1>
        </div>
        </div>

        <nav className="header-nav">

        <div className ="row">

<div className="col col-centered">
        Switch Scoring System to: <Link to='/'>Standard</Link> 
        </div>
        </div>
    
        <div className ="row">
        <div className="col col-centered">
        <b>OVR </b> |
        <Link to='/qb'> QB </Link>|
        <Link to='/ppr/rb'> RB </Link>|
        <Link to='/ppr/wr'> WR </Link>|
        <Link to='/ppr/te'> TE </Link>|
        <Link to='/k'> K </Link>|
        <Link to='/dst'> DST</Link> 
</div>
</div>
</nav>
<PlayerSearch category="ppr" position="overall"/> 
<ScrollUpButton  />

        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        players: state.players.players,
        loading: state.players.loading,
        error: state.players.error
    };
};


export default connect(mapStateToProps)(PlayersList);