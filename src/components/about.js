import React from 'react';

import './info-modal.css';

export default function About(props) {
    return (
        <div className="about-overlay" id="modal">
            <div className="content about">
                <h3>Welcome!</h3>
                <div>
                    <p>This is a Fantasy Football Pre-Draft Rankings App.</p> <p>Features on the app include: </p>
                    <ul>
                        <li>1. A comprehensive list of players ranked by the experts at <a href="https://fantasydata.com/" target="_blank" rel="noopener noreferrer">FantasyData</a></li>
                        <li>2. A drop-down to sort players by name (A-Z and Z-A) and ranking (1-X and X-1)</li>
                        <li>3. A search form that allows you to search players by their name. It also comes with a reset button so you can reset the list and search</li>
                    </ul>

                    <p><strong>Credits:</strong></p>
                    <ul>
                        <li><a href="https://fantasydata.com/" target="_blank" rel="noopener noreferrer" className="credits">FantasyData</a></li>
                        <li><a href="https://espn.com/" target="_blank" rel="noopener noreferrer" className="espn-credits">ESPN</a></li>
                    </ul>
                    <p>So, Are you ready?</p>
                    <a  className="close" href="/" >Got It! Take Me Home!</a>
                </div>
            </div>
        </div>
    );
}
