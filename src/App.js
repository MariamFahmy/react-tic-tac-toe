// export: makes this function accessible outside of this file
// default: tells other files using your code that this is the main function in your file
// return: whatever is after return is returned to the caller as a value
// <button> is a JSX element
// A JSX element is a combination of JavaScript code and HTML tags that describes
//      what you'd like to display
// className is a button property or prop that tells CSS how to style the element
// React components need to return only a single JSX element; we can use Fragments
//      (<> and </>) for this
// Component names must start with a capital letter, unlike HTML element names like div
// Use curly braces to escape from JSX into JavaScript
import {useState} from 'react';

function Square({ value, onSquareClick }) {
    return (
        <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

// Square is a child of Board
function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        // Returning early if square already filled
        // or if someone won
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        const nextSquares = squares.slice(); // make a copy of squares array
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    let boardRows = [];
    for (let row = 0; row < 3; row++) {
        let squareElements = [];
        for (let square = row * 3; square < row * 3 + 3; square++) {
            squareElements[square] = (
                <Square key={square} value={squares[square]} onSquareClick={() => handleClick(square)}/>
            )
        }

        boardRows[row] = (
            <div key={row} className="board-row">
                {squareElements}
            </div>
        )
    }

    return (
        <>
            <div className="status">{status}</div>
            {boardRows}
        </>
    )
}

// 'export default' tells index.js to use the Game component as the top-level component
export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    // Transform an array into another array using map
    // Transform history into an array of React elements that can be rendered
    const moves = history.map((squares, move) => {
        let description;

        if (move === currentMove) {
            description = 'You are at move #' + move;
        } else if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }

        return (
            <li key={move}>
                {move === currentMove ?
                    <p>{description}</p> :
                    <button onClick={() => jumpTo(move)}>{description}</button>}
            </li>
        )
    })

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

// Does not matter whether calculateWinner is defined before or after Board
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}