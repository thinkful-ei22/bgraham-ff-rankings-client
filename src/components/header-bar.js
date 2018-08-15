import React from 'react';
import {connect} from 'react-redux';
import './playerList.css';
import './float-grid.css';
//import {clearAuth} from '../actions/auth';
//import {clearAuthToken} from '../local-storage';

export function HeaderBar(props) {
    // logOut() {
    //     this.props.dispatch(clearAuth());
    //     //clearAuthToken();
   // }

   
        // Only render the log out button if we are logged in
        // let logOutButton;
        // if (this.props.loggedIn) {
        //     logOutButton = (
        //         <button onClick={() => this.logOut()}>Log out</button>
        //     );
        // }

       

       


        return (
            <header role="banner">
            <div className="row">
            <div className="col-12 header-bar">
        <h1>FF Draft Rankings</h1>
        </div>
            </div>
            </header>
        );
    }

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(HeaderBar);