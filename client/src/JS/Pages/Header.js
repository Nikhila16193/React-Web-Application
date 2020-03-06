import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { BrowserRouter } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";

import "../.././CSS/scss/bootstrap.scss";

import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Page4 from './Page4'

const HeaderNav = (
    class Header extends React.Component {
        render() {
            return (
                <Router>                   
                    <div className="Navigation">
                        <ul className="nav  nav-pills nav-fill justify-content-center">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Page1">Page1</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Page2">Page2</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Page3">Page3</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/Page4">Page4</Link>
                            </li>
                        </ul>
                    </div >{/*All our Routes goes here!*/}
                    <Switch>
                        <Route path="/HeaderNav" component={HeaderNav} />
                        <Route path="/Page1" component={Page1} />
                        <Route path="/Page2" component={Page2} />
                        <Route path="/Page3" component={Page3} />
                        <Route path="/Page4" component={Page4} />
                    </Switch>
                    <div className="Navigation">
                        <ul className="nav  nav-pills nav-fill justify-content-center">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/Page1">Page1</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Page2">Page2</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Page3">Page3</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to="/Page4">Page4</Link>
                            </li>
                        </ul>
                    </div >{/*All our Routes goes here!*/}
                </Router>
            );
        }
    }
);

export default HeaderNav;