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
        let position = 'qb';

        console.log('Component did mount');
        this.props.dispatch(fetchPlayers(category, position));
    }

    render(){

        return (
           <div> 
               <HeaderBar />

               <div className ="row">

<div className="col-12">
        <h1 className="sub-header">Quarter Backs</h1>
        </div>
        </div>

                <nav className="header-nav">
               

<div className ="row">
        <div className="col col-centered">
        <Link to='/'>OVR </Link> |
        <b> QB </b>|
        <Link to='/std/rb'> RB </Link>|
        <Link to='/std/wr'> WR </Link>|
        <Link to='/std/te'> TE </Link>|
        <Link to='/k'> K </Link>|
        <Link to='/dst'> DST</Link> 
        </div>
        </div>

</nav>
            <PlayerSearch position="qb"/>
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