
import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import './playerList.css';
export class PlayerSearch extends React.Component {
    state = {
        filter: ''
    }
    renderResults() {
        if (this.props.loading) {
            return <Spinner spinnername="circle" noFadeIn />;
        }

        if (this.props.error) {
            return <strong>{this.props.error}</strong>;
        }
        
let filteredPlayers = this.props.players;

if (this.state.filter){

    filteredPlayers = filteredPlayers.filter(player => player.Name.toLowerCase().includes(this.state.filter.toLowerCase()))
        }
        const playersListString = filteredPlayers.map((player,index) => {
            return(
            <li key={index}>
            {player.Name}({player.Team}) - {player.Position} - <i>User Ranking: {player.UserRank}</i> - <i>Expert Ranking: {player.Rank}</i> <br /><br />
            </li>
            );
        });


        return (
            <ul className="players-search-results">
                {playersListString}
            </ul>
        );
    }

    search(category, position, e) {
        e.preventDefault();
        if (this.input.value.trim() === '') {
            return;
        }
        this.setState({
            filter: this.input.value
        }) 
    }

    reset(){
        this.input.value = '';
        this.setState({
            filter: ''
        }) 
    }

    render() {

        return (
            <div className="player-search">
                <form onSubmit={(e) => this.search(this.props.category, this.props.position, e)}>
                    <input type="search" ref={input => this.input = input} />
                    <button>Search</button>
                    <button onClick= {(e) => this.reset(e)}>Reset</button>
                </form>
                <ul className="player-search-results">
                    {this.renderResults()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    players: state.players.players,
    loading: state.players.loading,
    error: state.players.error,

});

export default connect(mapStateToProps)(PlayerSearch);