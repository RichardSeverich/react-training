import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width': '60px',
  'height': '60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square(props) {
  const value = props.value;
  return (
    <div
      className="square"
      style={squareStyle} >
      {value}
    </div>
  );
}

function onSquareClick(square, setSquare, playerTurn, setPlayerTurn) {
  if (square === '') {
    if (playerTurn === 'X') {
      setSquare('X')
      setPlayerTurn('O')
    } else {
      setSquare('O')
      setPlayerTurn('X')
    }
  }
}


function Board() {
  const [playerTurn, setPlayerTurn] = useState('X');
  const [playerWinner, setPlayerWinner] = useState('');
  const [square1, setSquare1] = useState('');
  const [square2, setSquare2] = useState('');
  const [square3, setSquare3] = useState('');
  const [square4, setSquare4] = useState('');
  const [square5, setSquare5] = useState('');
  const [square6, setSquare6] = useState('');
  const [square7, setSquare7] = useState('');
  const [square8, setSquare8] = useState('');
  const [square9, setSquare9] = useState('');

  useEffect(() => {
    // Row
    if (square1 === square2 && square1 === square3) {
      setPlayerWinner(square1);
    } else if (square4 === square5 && square4 === square6) {
      setPlayerWinner(square4);
    } else if (square7 === square8 && square7 === square9) {
      setPlayerWinner(square7);
    }
    // Column
    else if (square1 === square4 && square1 === square7) {
      setPlayerWinner(square1);
    } else if (square2 === square5 && square2 === square8) {
      setPlayerWinner(square2);
    } else if (square3 === square6 && square3 === square9) {
      setPlayerWinner(square3);
    }
    // Diagonal
    else if (square1 === square5 && square1 === square9) {
      setPlayerWinner(square1);
    } else if (square3 === square5 && square3 === square7) {
      setPlayerWinner(square3);
    }
  }, [
    square1,
    square2,
    square3,
    square4,
    square5,
    square6,
    square7,
    square8,
    square9,
  ])

  function handleReset() {
    setSquare1('');
    setSquare2('');
    setSquare3('');
    setSquare4('');
    setSquare5('');
    setSquare6('');
    setSquare7('');
    setSquare8('');
    setSquare9('');
    setPlayerWinner('')
    setPlayerTurn('X')
  }

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{playerTurn === "X" ? "O" : "X"}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{playerWinner}</span></div>
      <button onClick={() => handleReset()} style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <div onClick={() => onSquareClick(square1, setSquare1, playerTurn, setPlayerTurn)}>
            <Square value={square1} />
          </div>
          <div onClick={() => onSquareClick(square2, setSquare2, playerTurn, setPlayerTurn)}>
            <Square value={square2} />
          </div>
          <div onClick={() => onSquareClick(square3, setSquare3, playerTurn, setPlayerTurn)}>
            <Square value={square3} />
          </div>
        </div>
        <div className="board-row" style={rowStyle}>
          <div onClick={() => onSquareClick(square4, setSquare4, playerTurn, setPlayerTurn)}>
            <Square value={square4} />
          </div>
          <div onClick={() => onSquareClick(square5, setSquare5, playerTurn, setPlayerTurn)}>
            <Square value={square5} />
          </div>
          <div onClick={() => onSquareClick(square6, setSquare6, playerTurn, setPlayerTurn)}>
            <Square value={square6} />
          </div>
        </div>
        <div className="board-row" style={rowStyle}>
          <div onClick={() => onSquareClick(square7, setSquare7, playerTurn, setPlayerTurn)}>
            <Square value={square7} />
          </div>
          <div onClick={() => onSquareClick(square8, setSquare8, playerTurn, setPlayerTurn)}>
            <Square value={square8} />
          </div>
          <div onClick={() => onSquareClick(square9, setSquare9, playerTurn, setPlayerTurn)}>
            <Square value={square9} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);