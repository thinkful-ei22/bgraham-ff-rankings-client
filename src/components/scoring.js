import React from 'react';

import './info-modal.css';

export default function About(props) {
    return (
        <div className="scoring-overlay" id="modal">
            <div className="content">
                <h3>Fantasy Football Rules</h3>
                <div>
                    <h4>Basics</h4>
                    <ol>
                        <li>Fantasy football participants are "owners" and "managers" of teams that engage in competitive leagues, accruing "fantasy points" based on the statistics of real football players.</li>
                        <li> Leagues are scored on a weekly basis, matching up teams in a head-to-head scenario in a rotating schedule.</li>
                        <li>Teams in the end with the best records make it into the fantasy postseason (often held from Weeks 14-17 of the NFL schedule).</li>
                        <li><strong>Goal:</strong> collect the most productive players across a variety of positions.</li>
                       <li>In standard leagues, the eight players on a team's active roster earn points based on the statistics they generate in actual NFL games. </li>
                        <li>These fantasy points are added together for a weekly team score. </li>
                        <li>Statistics from bench players do NOT earn fantasy points. </li>
                        <li>The winner of an fantasy football game is the team with more points earned for the week (two weeks for playoff games). </li>
                        <li>In the event that both you and your opponent accumulate the same number of points, a tie will be awarded.</li>
                        <li>No playoff game can end in a tie.</li>
                    </ol>

                    <h4>Roster:</h4>
                    <ul>
                        <li> 1 quarterback</li>
                        <li> 2 running backs</li>
                        <li> 1 "flex" player (either a running back or wide receiver)</li>
                        <li>2 wide receivers</li>
                        <li>1 tight end</li>
                        <li>1 team defense/special teams (you draft the entire Pittsburgh Steelers defense and special teams, for example)</li>
                        <li>1 kicker</li>
                        <li>7 bench spots (any position)</li>
                    </ul>
                    <h4>Scoring:</h4>
                    <p><strong><u>Offense:</u> Quarterbacks (QB), Running Backs (RB), Wide Receivers (WR), Tight Ends (TE)</strong></p>
                    <ul>
                        <li> 6 pts per rushing or receiving TD</li>
                        <li> 6 pts for player returning kick/punt for TD</li>
                        <li> 6 pts for player returning or recovering a fumble for TD</li>
                        <li>4 pts per passing TD</li>
                        <li>2 pts per rushing or receiving 2 pt conversion (note: teams do not receive points
for yardage gained during the conversion)</li>
                        <li>2 pts per passing 2 pt conversion</li>
                        <li>1 pt per 10 yards rushing or receiving</li>
                        <li>1 pt per 25 yards passing</li>
                        <li>1 pt per reception (PPR scoring ONLY)</li>
                    </ul>

                    <p><strong>Bonus Points</strong></p>
                        <ul>
                        <li> 2 pts per rushing or receiving TD of 40 yards or more</li>
                        <li> 2 pts per passing TD of 40 yards or more</li>
                        <li> (note: the player must score a touchdown to score the points)</li>
                        </ul>
                        <p><strong>Penalty Points</strong></p>
                        <ul>
                        <li> -2 pts per intercepted pass</li>
                        <li> -2 pts per fumble loste</li>
                        </ul>

                    <p><strong><u>Kickers:</u></strong></p>
                        <ul>
                        <li>5 pts per 50+ yard FG made</li>
                        <li>4 pts per 40-49 yard FG made</li>
                        <li>3 pts per FG made, 39 yards or less</li>
                        <li>2 pts per rushing, passing, or receiving 2 pt conversion</li>
                        <li>1 pt per Extra Point made</li>
                        </ul>
                        <p><strong>Penalty Points</strong></p>
                        <ul>
                       <li> -2 pts per missed FG (0-39 yds)</li>
                        <li>-1 pt per missed FG (40-49 yds)</li>
                        <li>(note: a missed FG includes any attempt that is blocked, deflected, etc.)</li>
                        </ul>

                            <p><strong><u>Defense/Special Teams:</u></strong></p>
                        <ul>
                        <li>Sacks: 1 pt</li>
                        <li>Interceptions: 2 pts</li>
                        <li>Fumbles Recovered: 2 pts</li>
                        <li>Safeties: 2 pts</li>
                        <li>Defensive Touchdowns: 6 pts</li>
                        <li>Kick and Punt Return Touchdowns: 6 pts</li>
                        <li>2-Point Conversion Returns: 2 pts</li>
                        <li>Points Allowed (0): 10 pts</li>
                        <li>Points Allowed (1-6): 7 pts</li>
                        <li>Points Allowed (7-13): 4 pts</li>
                        <li>Points Allowed (14-20): 1 pts</li>
                        <li>Points Allowed (21-27): 0 pts</li>
                        <li>Points Allowed (28-34): -1 pts</li>
                        <li>Points Allowed (35+): -4 pts</li>
                        </ul>



                    <p>So, Are you ready?</p>
                    <a  className="close" href="/" >Got It! Take Me Home!</a>
                </div>
            </div>
        </div>
    );
}
