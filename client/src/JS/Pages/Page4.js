import React from 'react';
import ReactDOM from 'react-dom';

import "../.././CSS/scss/bootstrap.scss";
import '../../index.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

import { ScoreInputList } from ".././Components/MyLandScoreForm";

//.././Components/MyLandScoreForm
import HeaderNav from './Header'


var buttonStyle = {
  margin: '10px 10px 10px 0',
  background: "pink"
};

// var Button = React.createClass({
//     render: function () {
//         return (
//             <button
//                 className="btn btn-default"
//                 style={buttonStyle}
//                 onClick={this.props.handleClick}>{this.props.label}
//             </button>
//         );
//     }
// });



const Page4 = (
  class Page4 extends React.Component {
    state = {
      data: null
    };

    componentDidMount() {
      // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/postgres_employee');
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.json)
      }
      return body;
    };
    render() {
      return (
        <div>
          <div>
          <button
            className="btn btn-default"
            style={buttonStyle}>
            {/* // onClick={this.handleClickButton}>                         */}
          </button>
          {/* <h1> {this.state.EmployeeName} </h1> */}
          <h1> {this.state.data}  </h1>
        </div>
         <ScoreInputList/>
         </div>
      );
    }
  }
);



export default Page4;



//import "./CSS/scss/bootstrap.scss";
// import './JS/bootstrap.min.js'
//import Page1 from './JS/Pages/Page1'
// import Draggable from 'react-draggable';
// import { BrowserRouter } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect
// } from "react-router-dom";
// constructor(props) {
        //     super(props);

        //     this.state = {
        //         EmployeeName: ''
        //     };

        //     this.handleClickButton = this.handleClickButton.bind(this);
        // }

        // handleClickButton(ev) {
        //     ev.preventDefault();

        //     const data = new FormData();
        //     // data.append('file', this.uploadInput.files[0]);
        //     // data.append('filename', this.fileName.value);

        //     fetch('http://localhost:5000/express_backend', {
        //         method: 'GET',
        //         body: data
        //     }).then(response => {
        //         response.json().then(body => {
        //             this.setState({ EmployeeName: { data } });
        //         });
        //     });
        // }
          // const response = await fetch('/express_backend');
      // const body = await response.json();