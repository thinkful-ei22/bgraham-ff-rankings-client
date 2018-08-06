import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';

export class PlayersList extends React.Component{
    
    componentDidMount(){
        console.log('Component did mount');
        this.props.dispatch(fetchPlayers());
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

        return (
           <div> 
            <h1>FF Draft Rankings - Overall (Standard Scoring)</h1>

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