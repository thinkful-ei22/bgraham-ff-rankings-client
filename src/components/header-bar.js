import React from 'react';
import {connect} from 'react-redux';
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
            <div className="header-bar">
        <h1>FF Draft Rankings</h1>
            </div>
        );
    }

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(HeaderBar);