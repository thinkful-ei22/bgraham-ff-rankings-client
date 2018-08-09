import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';
import {Link} from 'react-router-dom';
import './playerList.css';

export class PlayersList extends React.Component{
    
   
    componentDidMount(){
        let category = 'std';
        let position = 'wr';

        console.log('Component did mount');
        this.props.dispatch(fetchPlayers(category, position));
    }

    onClick(event) {
        event.preventDefault();
        console.log('button is responding');
        document.getElementsByClassName('submit-user-ranking').style.display='block';
    }
    render(){

        
        const playersListString = this.props.players.map((player,index) => {
            //console.log(player);

            return (
              <li key={index}>
                {player.Name}({player.Team}) - {player.Position} - <i>User Ranking: 
                <input type="number" name="user-rank-edit-entry" id="user-rank-edit-form" placeholder={player.UserRank} />  </i> - <i>Expert Ranking: {player.Rank}</i>           <br />
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


        let scoring = this.props.location.pathname.includes('/std') ? '/ppr' : '/std'

        scoring = this.props.location.pathname === '/' ? '/ppr' : scoring

         let position= this.props.location.pathname.split('/')[2];

         position = typeof position === 'undefined' ? 'overall' : position

        return (
           <div> 
<div className="sub-header">
        <h1>Wide Receivers (Standard Scoring)</h1>
        Switch Scoring System to: <Link to={`${scoring}/${position}`}>PPR</Link> 


        <nav className="header-nav">
<br />
        <Link to='/std/overall'>OVR </Link> |
        <Link to='/qb'> QB </Link>|
        <Link to='/std/rb'> RB </Link>|
        <b> WR </b>|
        <Link to='/std/te'> TE </Link>|
        <Link to='/k'> K </Link>|
        <Link to='/dst'> DST</Link> 
</nav>
<br />

<button name="edit-user-rank" className="edit-user-ranking" onClick = {e => this.onClick(e)}>Edit User Rank </button>
<button className="submit-user-ranking">Submit User Rank </button>

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