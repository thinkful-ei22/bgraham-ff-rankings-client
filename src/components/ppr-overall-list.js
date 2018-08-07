import React from 'react';
import {connect} from 'react-redux';
import {fetchPlayers} from '../actions/players';

export class PlayersList extends React.Component{
    
   
    componentDidMount(){
        let category = 'ppr';
        let position = 'overall';

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

        return (
           <div> 
<div className="header-bar">
        <h1>Overall (PPR Scoring)</h1>
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