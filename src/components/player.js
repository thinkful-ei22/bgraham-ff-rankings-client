import React from 'react';
import {connect} from 'react-redux';
import './player.css';
// import './float-grid.css';

export class Player extends React.Component{
constructor(props){
    super(props);
    this.state ={
        isExpanded: false,
        expandButton: 'Expand'
    }
}

toggleExpanded(e){

if (this.state.expandButton === 'Expand'){
    this.setState({
        isExpanded: true,
        expandButton: 'Collapse'
    })
    
}

else {
    this.setState({
        isExpanded: false,
        expandButton: 'Expand'
    })
}
   
}

    
    render(){
let projectionString;
if (this.props.player.Position === 'QB'){
    projectionString = 
    <div>
    <div className="row">
     <div className="col-sm">Passing Yards: {this.props.player.PassingYards}</div>
     </div>
     <div className="row">
    <div className="col-sm">Passing Touchdowns: {this.props.player.PassingTouchdowns}</div>
    </div>
    <div className="row">
    <div className="col-sm">Passing Interceptions: {this.props.player.PassingInterceptions}</div>
    </div>
    <div className="row">
    <div className="col-sm">Rushing Yards: {this.props.player.RushingYards}</div>
    </div>
    <div className="row">
    <div className="col-sm">Rushing Touchdowns: {this.props.player.RushingTouchdowns}</div>
    </div>
    <div className="row">
    <div className="col-sm">Fantasy Points: {this.props.player.FantasyPoints}</div>
    </div>
</div>
}
else if (this.props.player.Position === 'RB'){
    projectionString = 
    <div>
    <div className="row">
    <div className="col-sm">Rushing Yards: {this.props.player.RushingYards}</div>
    </div>
        <div className="row">

    <div className="col-sm">Rushing Touchdowns: {this.props.player.RushingTouchdowns}</div>
    </div>
        <div className="row">

    <div className="col-sm">Receptions: {this.props.player.Receptions}</div>
    </div>
        <div className="row">

    <div className="col-sm">Receiving Yards: {this.props.player.ReceivingYards}</div>
    </div>
        <div className="row">

    <div className="col-sm">Receiving Touchdowns: {this.props.player.ReceivingTouchdowns}</div>
    </div>
    <div className="row">
    <div className="col-sm">Fantasy Points: {this.props.player.FantasyPoints}</div>
</div>
</div>
}
else if (this.props.player.Position === 'WR'){
    projectionString = 
    <div>
    <div className="row">
    <div className="col-sm">Receptions: {this.props.player.Receptions}</div>
    </div>
    <div className="row">
    <div className="col-sm">Receiving Yards: {this.props.player.ReceivingYards}</div>
    </div>
    <div className="row">
    <div className="col-sm">Receiving Touchdowns: {this.props.player.ReceivingTouchdowns}</div>
    </div>
    <div className="row">
    <div className="col-sm">Fantasy Points: {this.props.player.FantasyPoints}</div>
    </div>
    </div>
}
else if (this.props.player.Position === 'TE'){
    projectionString = 
    <div>
         <div className="row">
    <div className="col-sm">Receptions: {this.props.player.Receptions}</div>
    </div>
    <div className="row">
    <div className="col-sm">Receiving Yards: {this.props.player.ReceivingYards}</div>
    </div>
    <div className="row">
    <div className="col-sm">Receiving Touchdowns: {this.props.player.ReceivingTouchdowns}</div>
    </div>
    <div className="row">
    <div className="col-sm">Fantasy Points: {this.props.player.FantasyPoints}</div>
    </div>
    </div>
   
}
else if (this.props.player.Position === 'K'){
    projectionString = 
    <div>
    <div className="row">
    <div className="col-sm">Field Goals Made: {this.props.player.FieldGoalsMade}</div>
    </div>
    <div className="row">
    <div className="col-sm">Field Goals Attempted: {this.props.player.FieldGoalsAttempted}</div>
    </div>
    <div className="row">
    <div className="col-sm">Field Goal Percentage: {this.props.player.FieldGoalPercentage}%</div>
    </div>
    <div className="row">
    <div className="col-sm">Extra Points Made: {this.props.player.ExtraPointsMade}</div>
    </div>
    <div className="row">
    <div className="col-sm">Extra Points Attempted: {this.props.player.ExtraPointsAttempted}</div>
    </div>
    <div className="row">
    <div className="col-sm">Fantasy Points: {this.props.player.FantasyPoints}</div>
</div>
</div>
}
else if (this.props.player.Position === 'DST'){
    projectionString = 
    <div>
    <div className="row">
    <div className="col-sm">Sacks: {this.props.player.Sacks}</div>
    </div>
    <div className="row">
    <div className="col-sm">QB Hits: {this.props.player.QuarterBackHits}</div>
    </div>
    <div className="row">
    <div className="col-sm">Interceptions: {this.props.player.Interceptions}</div>
    </div>
    <div className="row">
    <div className="col-sm">Fumbles Recovered: {this.props.player.FumblesRecovered}</div>
    </div>
    <div className="row">
    <div className="col-sm">Safeties: {this.props.player.Safeties}</div>
    </div>
    <div className="row">
    <div className="col-sm">Defensive Touchdowns: {this.props.player.DefensiveTouchdowns}</div>
    </div>
    <div className="row">
    <div className="col-sm">Special Teams Touchdowns: {this.props.player.SpecialTeamsTouchdowns}</div>
    </div>
    <div className="row">
    <div className="col-sm">Fantasy Points: {this.props.player.FantasyPoints}</div>
</div>
</div>
}




        return(
            <tr>
         <td >
         {this.props.player.Name} 
         <div id ="details" className={this.state.isExpanded ? 'slideIn' : 'slideOut'} >
         <img src={this.props.player.Profile} className="Profile" alt="Player-Profile" />

        </div> 
         </td>
         <td className="rank" >{this.props.player.Rank}</td>
         <td className="non-mobile">{this.props.player.Team}</td> 
            <td >{this.props.player.Position}</td> 
            <td className="non-mobile">
            <button onClick= {(e) =>this.toggleExpanded(e)}> {this.state.expandButton} </button>
            
         <div id="details" className={this.state.isExpanded ? 'slideIn' : 'slideOut'} >
        
        <u>Season Projections</u>

         {projectionString}             
         </div>
         </td>
         
    


         </tr> 

        );
    }

}

const mapStateToProps = state => ({
    players: state.players.players,
    loading: state.players.loading,
    error: state.players.error,

});

export default connect(mapStateToProps)(Player);