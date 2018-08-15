import React from 'react';
import {connect} from 'react-redux';
import './player.css';

export class Player extends React.Component{
constructor(props){
    super(props);
    this.state ={
        isExpanded: false
    }
}

toggleExpanded(e){
    console.log('button clicked');

    this.setState({isExpanded: !this.state.isExpanded})
    
    console.log(this.state.isExpanded);
}

    
    render(){
let projectionString;
if (this.props.player.Position === 'QB'){
    projectionString = 
    <ul>
     <li>Passing Yards: {this.props.player.PassingYards}</li>
    <li>Passing Touchdowns: {this.props.player.PassingTouchdowns}</li>
    <li>Passing Interceptions: {this.props.player.PassingInterceptions}</li>
    <li>Rushing Yards: {this.props.player.RushingYards}</li>
    <li>Rushing Touchdowns: {this.props.player.RushingTouchdowns}</li>
    <li>Fantasy Points: {this.props.player.FantasyPoints}</li>
</ul>
}
else if (this.props.player.Position === 'RB'){
    projectionString = 
    <ul>
    <li>Rushing Yards: {this.props.player.RushingYards}</li>
    <li>Rushing Touchdowns: {this.props.player.RushingTouchdowns}</li>
    <li>Receptions: {this.props.player.Receptions}</li>
    <li>Receiving Yards: {this.props.player.ReceivingYards}</li>
    <li>Receiving Touchdowns: {this.props.player.ReceivingTouchdowns}</li>
    <li>Fantasy Points: {this.props.player.FantasyPoints}</li>
</ul>
}
else if (this.props.player.Position === 'WR'){
    projectionString = 
    <ul>
    <li>Receptions: {this.props.player.Receptions}</li>
    <li>Receiving Yards: {this.props.player.ReceivingYards}</li>
    <li>Receiving Touchdowns: {this.props.player.ReceivingTouchdowns}</li>
    <li>Fantasy Points: {this.props.player.FantasyPoints}</li>
    </ul>
}
else if (this.props.player.Position === 'TE'){
    projectionString = 
    <ul>
    <li>Receptions: {this.props.player.Receptions}</li>
    <li>Receiving Yards: {this.props.player.ReceivingYards}</li>
    <li>Receiving Touchdowns: {this.props.player.ReceivingTouchdowns}</li>
    <li>Fantasy Points: {this.props.player.FantasyPoints}</li>
    </ul>
}
else if (this.props.player.Position === 'K'){
    projectionString = 
    <ul>
    <li>Field Goals Made: {this.props.player.FieldGoalsMade}</li>
    <li>Field Goals Attempted: {this.props.player.FieldGoalsAttempted}</li>
    <li>Field Goal Percentage: {this.props.player.FieldGoalPercentage}%</li>
    <li>Extra Points Made: {this.props.player.ExtraPointsMade}</li>
    <li>Extra Points Attempted: {this.props.player.ExtraPointsAttempted}</li>
    <li>Fantasy Points: {this.props.player.FantasyPoints}</li>
</ul>
}
else if (this.props.player.Position === 'DST'){
    projectionString = 
    <ul>
    <li>Sacks: {this.props.player.Sacks}</li>
    <li>QB Hits: {this.props.player.QuarterBackHits}</li>
    <li>Interceptions: {this.props.player.Interceptions}</li>
    <li>Fumbles Recovered: {this.props.player.FumblesRecovered}</li>
    <li>Safeties: {this.props.player.Safeties}</li>
    <li>Defensive Touchdowns: {this.props.player.DefensiveTouchdowns}</li>
    <li>Special Teams Touchdowns: {this.props.player.SpecialTeamsTouchdowns}</li>
    <li>Fantasy Points: {this.props.player.FantasyPoints}</li>
</ul>
}

        return(
        <li>
         {this.props.player.Name}({this.props.player.Team}) 
        - {this.props.player.Position} - <i>Expert Ranking: {this.props.player.Rank} </i>
 
        <button onClick= {(e) =>this.toggleExpanded(e)}> Details </button>

        <div className={this.state.isExpanded ? 'details expand' : 'details'} >
        
        Projections:

         {projectionString}             
         </div>
         <br /><br />
         </li>

        );
    }

}

const mapStateToProps = state => ({
    players: state.players.players,
    loading: state.players.loading,
    error: state.players.error,

});

export default connect(mapStateToProps)(Player);