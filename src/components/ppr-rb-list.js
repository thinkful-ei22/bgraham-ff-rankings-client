import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';
import {Link} from 'react-router-dom';
import './playerList.css';
import './float-grid.css';
import PlayerSearch from './player-search';

export class PlayersList extends React.Component{
    
   
    componentDidMount(){
        let category = 'ppr';
        let position = 'rb';

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
            <div className ="row">

            <div className="col-xl">

        <h1 className="sub-header">Running Backs (PPR Scoring)</h1>
        </div>
        </div>
  <nav className="header-nav">
<div className="row">
        <div className="col col-centered">
        Switch Scoring System to: <Link to={`${scoring}/${position}`}>Standard</Link> 
        </div>
        </div>
       
        <div className ="row">

 <div className="col col-centered">

        <Link to='/ppr/overall'>OVR </Link> |
        <Link to='/qb'> QB </Link>|
        <b> RB </b>|
        <Link to='/ppr/wr'> WR </Link>|
        <Link to='/ppr/te'> TE </Link>|
        <Link to='/k'> K </Link>|
        <Link to='/dst'> DST</Link> 
</div>
</div>
</nav>

<PlayerSearch category="ppr" position="rb"/>
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