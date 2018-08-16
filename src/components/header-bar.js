import React from 'react';
import {connect} from 'react-redux';
import './playerList.css';
import './float-grid.css';

export function HeaderBar(props) {
 
        return (
            <header role="banner">
            <div className="row">
            <div className="col-12">
        <h1 className="header-bar">Fantasy Football Draft Rankings</h1>
        </div>
            </div>
            </header>
        );
    }

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(HeaderBar);