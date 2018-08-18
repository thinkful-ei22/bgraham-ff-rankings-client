import React from 'react';
import {connect} from 'react-redux';
import './playerList.css';
import './float-grid.css';
export function HeaderBar(props) {
 
        return (
            <header role="banner">
            <div className="row tutorial">
            <div className="col-sm-4"><a className="app-tutorial" href="/about">New To the App?</a></div>
            <div className="col-sm-6"><a className="scoring-tutorial" href="/scoring">New to Fantasy Football?</a></div>

            </div>
            <div className="row">
            <div className="col-lg-12">
        <h1 className="header-bar">LowerReact's Fantasy Football Draft Rankings</h1>
        </div>
            </div>

            </header>


        );
    }

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(HeaderBar);