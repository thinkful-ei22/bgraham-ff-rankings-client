import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';
import {Link} from 'react-router-dom';
import './playerList.css';

export class PlayersList extends React.Component{
    
   
    componentDidMount(){
        let category = 'std';
        let position = 'k';

        console.log('Component did mount');
        this.props.dispatch(fetchPlayers(category, position));
    }

    render(){

        
        const playersListString = this.props.players.map((player,index) => {
            //console.log(player);

            return (
              <li key={index}>
                {player.Name}({player.Team}) - {player.Position} - <i>User Ranking: {player.UserRank}</i> - <i>Expert Ranking: {player.Rank}</i>           <br />
                <br />

              </li>
            );
          });
      

        if (this.props.loading){
            return <div>Loading...</div>;
        }
        if (this.props.error){
            return <div>{this.props.error}</div>;
        }

        return (
           <div> 
<div className="header-bar">
        <h1>Kickers</h1>

        <nav className="header-nav">
<br />
        <Link to='/std/overall'>OVR </Link> |
        <Link to='/qb'> QB </Link>|
        <Link to='/std/rb'> RB </Link>|
        <Link to='/std/wr'> WR </Link>|
        <Link to='/std/te'> TE </Link>|
        <b> K </b>|
        <Link to='/dst'> DST</Link> 
</nav>
            </div>
            <ul className="playerList">
            {playersListString}
        </ul>
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