import React from 'react';
import ReactDOM from 'react-dom';

import "../.././CSS/scss/bootstrap.scss";
import '../../index.css';

import { ScoreInputList } from ".././Components/LandScoreDetailView";

class Square extends React.Component {
    render() {
      return (
        <button
          className="square"
          onClick={() => this.props.onClick()}
        >
          {this.props.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
      };
    }
  
    handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({ squares: squares });
    }
  
    renderSquare(i) {
      return (
        <Square
          value={this.state.squares[i]}
          onClick={() => this.handleClick(i)}
        />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  class Game extends React.Component {
    render() {
      return (
        <div>
          <div className="container game">
            <div className="game-board">
              <Board />
            </div>
            <div className="game-info">
              <div>{/* status */}</div>
              <ol>{/* TODO */}</ol>
            </div>
          </div>
        </div>
      );
    }
  }
  
const Page3 =  (
    class Page3 extends React.Component {       
        render() {
            return (
                <div>
                   <Game/>
                   <ScoreInputList/>
                </div>
            );
        }
    }
);

export default Page3;



//import HeaderNav from './Header'
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

//import "./CSS/scss/bootstrap.scss";

