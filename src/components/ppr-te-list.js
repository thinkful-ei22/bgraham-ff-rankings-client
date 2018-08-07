import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';
import {Link} from 'react-router-dom';
export class PlayersList extends React.Component{
    
   
    componentDidMount(){
        let category = 'ppr';
        let position = 'te';

        console.log('Component did mount');
        this.props.dispatch(fetchPlayers(category, position));
    }

    render(){

        
        const playersListString = this.props.players.map((player,index) => {
            //console.log(player);

            return (
              <li key={index}>
                {player.Name}({player.Team}) - {player.Position}              <br />
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
<div className="header-bar">
        <h1>Tight Ends (PPR Scoring)</h1>
        Switch Scoring System to: <Link to={`${scoring}/${position}`}>Standard</Link> 

<nav className="header-nav">
<br />
        <Link to='/ppr/overall'>OVR </Link> |
        <Link to='/qb'> QB </Link>|
        <Link to='/ppr/rb'> RB </Link>|
        <Link to='/ppr/wr'> WR </Link>|
        <b> TE </b>|
        <Link to='/k'> K </Link>|
        <Link to='/dst'> DST</Link> 
</nav>
            </div>
        <ol>
            {playersListString}
        </ol>
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