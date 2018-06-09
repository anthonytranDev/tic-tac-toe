import React, { Component } from 'react';

import Square from './Square'
import './Board.css';

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
];

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      board: Array(9).fill(null),
      playerTurn: true
    };
    this.changePlayer = this.changePlayer.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
  }
  updateBoard(index){
    const currentBoard = this.state.board;
    const object = {};
    object[index] = this.state.playerTurn? "X" : "O";
    this.setState({ updateBoard: Object.assign(currentBoard, object)})
  }
  changePlayer(){
    this.setState({ playerTurn: !this.state.playerTurn });
  }
  componentDidUpdate(){
    console.log(this.state.board);
    const currentBoard = this.state.board;
    const valuePlayed = this.state.playerTurn? "O" : "X";
    const filledArray = currentBoard.map((e, i) => {
      return e === valuePlayed ? i : null;
    })
    const winnerFound = winningCombinations
      .map(array => array
        .every(element => filledArray.includes(element)))
      .some(element => element === true);
    if(winnerFound === true){
      alert(`Winner is ${valuePlayed}`)
    }
  }
  render() {
    return (
      <section className="board-container">
        <article className="board-wrapper">
            <Square index={0} changePlayer={this.changePlayer} playerTurn={this.state.playerTurn} updateBoard={this.updateBoard}/>
            <Square index={1} changePlayer={this.changePlayer} playerTurn={this.state.playerTurn} updateBoard={this.updateBoard}/>
            <Square index={2} changePlayer={this.changePlayer} playerTurn={this.state.playerTurn} updateBoard={this.updateBoard}/>
            <Square index={3} changePlayer={this.changePlayer} playerTurn={this.state.playerTurn} updateBoard={this.updateBoard}/>
            <Square index={4} changePlayer={this.changePlayer} playerTurn={this.state.playerTurn} updateBoard={this.updateBoard}/>
            <Square index={5} changePlayer={this.changePlayer} playerTurn={this.state.playerTurn} updateBoard={this.updateBoard}/>
            <Square index={6} changePlayer={this.changePlayer} playerTurn={this.state.playerTurn} updateBoard={this.updateBoard}/>
            <Square index={7} changePlayer={this.changePlayer} playerTurn={this.state.playerTurn} updateBoard={this.updateBoard}/>
            <Square index={8} changePlayer={this.changePlayer} playerTurn={this.state.playerTurn} updateBoard={this.updateBoard}/>
        </article>
      </section>
    );
  }
}
export default Board;