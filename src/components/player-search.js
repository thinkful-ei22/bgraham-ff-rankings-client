
import React from 'react';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import Player from './player';
import './playerList.css';
import './float-grid.css';
export class PlayerSearch extends React.Component {
   constructor(props){
   super(props);
    this.state = {
        filter: '',
        sort: '',
        id: '',
        }
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

sort(e){

    this.setState({
        sort: ''
    })

    if (e.target.value){
    }


    this.setState({
        sort: e.target.value
    })
}

update(e){
    // e.preventDefault();
    console.log(this.input);
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

        if (this.state.sort){




            if (this.state.sort === 'NameAsc'){

                filteredPlayers = filteredPlayers.sort(function (a,b) {
                   let aFirstAndLastName = a.Name.split(' ');
    
                   let aLastName = aFirstAndLastName[aFirstAndLastName.length-1];
                //  console.log(aLastName);
    
                   let bFirstAndLastName = b.Name.split(' ');
                   let bLastName = bFirstAndLastName[bFirstAndLastName.length-1];
    
                   if(aLastName.toLowerCase() < bLastName.toLowerCase()){
                    return -1;
                   } 
                   if(aLastName.toLowerCase() > bLastName.toLowerCase()){
                    return 1;
                   } 
                    return 0;
                });
            }
    
            if (this.state.sort === 'NameDesc'){
    
                filteredPlayers = filteredPlayers.sort(function (a,b) {
                   let aFirstAndLastName = a.Name.split(' ');
    
                   let aLastName = aFirstAndLastName[aFirstAndLastName.length-1];
                //  console.log(aLastName);
    
                   let bFirstAndLastName = b.Name.split(' ');
                   let bLastName = bFirstAndLastName[bFirstAndLastName.length-1];
    
                   if(aLastName.toLowerCase() < bLastName.toLowerCase()){
                    return 1;
                   } 
                   if(aLastName.toLowerCase() > bLastName.toLowerCase()){
                    return -1;
                   } 
                    return 0;
                });
            }


            if (this.state.sort === 'ExpRankAsc'){
            filteredPlayers = filteredPlayers.sort(function (a,b) {
                return a.Rank-b.Rank;
            });
        }
        if (this.state.sort === 'ExpRankDesc'){
            filteredPlayers = filteredPlayers.sort(function (a,b) {
                return b.Rank-a.Rank;
            });
        }
        }
        const playersListString = filteredPlayers.map((player,index) => {

            return(
                <Player player={player} key={index} />
                
            );
        });




        return (
            <table className="table table-striped">
            <thead>
            <tr >
                <th scope="col">Name</th>
                <th scope="col">Team</th>
                <th scope="col">Position</th>
                <th scope="col">Expert Ranking</th>
                <th scope="col">Details</th>
            </tr>
            </thead>
            <tbody>{playersListString}</tbody>
            </table>
        );
    }
    
   

    render() {

        return (
            <div>
            <div className="row">
            <div className="col col-centered">
            <select value={this.state.sort} onChange={(e) => this.sort(e)}>
                    <option >Sort By:</option>
                    <option value="NameAsc">Name (A-Z)</option>
                    <option value="NameDesc">Name (Z-A)</option>
                    <option value="ExpRankAsc">Expert Rank (1-{this.props.players.length})</option>
                    <option value="ExpRankDesc">Expert Rank ({this.props.players.length}-1)</option>
                </select>
                </div>
                 <form className="col-md" onSubmit={(e) => this.search(this.props.category, this.props.position, e)}>
                    <input type="search" ref={input => this.input = input}  placeholder="Player Search..." />
                    <button>Search</button>
                    <button onClick= {(e) => this.reset(e)}>Reset</button>
                </form>
                <br />
                </div>
                    {this.renderResults()}
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