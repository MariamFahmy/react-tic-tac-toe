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

function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X');
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

// Square is a child of Board
export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
}