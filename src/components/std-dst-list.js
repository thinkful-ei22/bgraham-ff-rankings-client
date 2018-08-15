import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';
import {Link} from 'react-router-dom';
import './playerList.css';
import './float-grid.css';

import PlayerSearch from './player-search';

export class PlayersList extends React.Component{
    
   
    componentDidMount(){
        let category = 'std';
        let position = 'dst';

        console.log('Component did mount');
        this.props.dispatch(fetchPlayers(category, position));
    }

    render(){

        return (
           <div> 
<div className ="row">

<div className="col-12">
        <h1 className="sub-header">Defense/Special Teams</h1>
        </div>
        </div>
        <nav className="header-nav">

                <div className ="row">
                <div className="col-12">
        <div className="Links-12">
<br />
        <Link to='/std/overall'>OVR </Link> |
        <Link to='/qb'> QB </Link>|
        <Link to='/std/rb'> RB </Link>|
        <Link to='/std/wr'> WR </Link>|
        <Link to='/std/te'> TE </Link>|
        <Link to='/k'> K </Link>|
        <b> DST</b> 
        </div>
        </div>
</div>
</nav>
            <PlayerSearch position="dst"/>

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