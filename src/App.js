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

function Square({ value }) {
    return <button className="square">{value}</button>;
}

// Square is a child of Board
export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square value="1" />
                <Square value="2" />
                <Square value="3" />
            </div>
            <div className="board-row">
                <Square value="4" />
                <Square value="5" />
                <Square value="6" />
            </div>
            <div className="board-row">
                <Square value="7" />
                <Square value="8" />
                <Square value="9" />
            </div>
        </>
    )
}