import React, { Component } from 'react';



import './App.css';
import HeaderNav from './JS/Pages/Header'


// import logo from './logo.svg';
// const express = require('express');
// const { Client } = require('pg');
// const connectionString = 'postgres://postgres:Hareesh@localhost:6060/test';
// const client = new Client({
//     connectionString: connectionString
// });
// client.connect();



class App extends Component {
  // state = {
  //   data: null
  // };

  // componentDidMount() {
  //   // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  // // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/postgres_employee');
  //   const body = await response.json();

  //   // const response = await fetch('/express_backend');
  //   // const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.json)
  //   }
  //   return body;
  // };
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.json)
  //   }
  //   return body;
  // };
  render() {
    return (
      <div className="App">
        <HeaderNav /> 
       
      </div>
    );
  }
}

export default App;