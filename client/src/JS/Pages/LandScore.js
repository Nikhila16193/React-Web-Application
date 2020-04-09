import React from 'react';

import { WebMapView } from ".././Components/WebMap";
// import ReactDOM from 'react-dom';
// import Draggable from 'react-draggable';
// import { BrowserRouter } from 'react-router-dom';
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Link,
//     Redirect
// } from "react-router-dom";
// import { ScoreInputList } from '.././Components/MyLandScoreForm.js'
// import Page1 from './Page1'
// import Page2 from './Page2'
// import Page3 from './Page3'
// import Page4 from './Page4'
// import LandScore from './LandScore'

//import WebMapView from '../Components/WebMap';


const LandScore = (
    class LandScore extends React.Component {
        render() {
            return (
                <div className="land_score_form">
                    <WebMapView />
                </div>
            );
        }
    }
);

export default LandScore;


