import React from 'react';
import ReactDOM from 'react-dom';

import "./CSS/bootstrap.min.css"
import './index.css';

// import HeaderNav from './JS/Pages/Header'
import App from './App.js'

// class App1 extends React.Component {
//   render() {
//     return (
//       <div>
//         <HeaderNav />
//         <ol>{/* TODO */}</ol>
//       </div>
//     );
//   }
// }


ReactDOM.render(
  <App />,
  document.getElementById('root')
);





//Commets
// import Draggable from 'react-draggable';
// import { BrowserRouter } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Link,
//   Redirect
// } from "react-router-dom";

//import "./CSS/scss/bootstrap.scss";


// import './JS/bootstrap.min.js'


// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// class Board extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       squares: Array(9).fill(null),
//     };
//   }

//   handleClick(i) {
//     const squares = this.state.squares.slice();
//     squares[i] = 'X';
//     this.setState({ squares: squares });
//   }

//   renderSquare(i) {
//     return (
//       <Square
//         value={this.state.squares[i]}
//         onClick={() => this.handleClick(i)}
//       />
//     );
//   }

//   render() {
//     const status = 'Next player: X';

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }
// class Game extends React.Component {
//   render() {
//     return (
//       <div>
//         <HeaderNav />
//         <div className="container game">
//           <div className="game-board">
//             <Board />
//           </div>
//           <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }




