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
export default function Board() {
    // The best approach is to store the game's state in the parent Board
    // component rather than in each Square

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(i) {
        // Returning early if square already filled
        if (squares[i]) {
            return;
        }

        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
    }


    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </>
    )
}