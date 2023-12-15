import React from 'react';
import { useState } from 'react';


interface SquareProps {
    value: number
    onSquareClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}
function Square({ value, onSquareClick }: SquareProps) {

    return (
        <button className="square"
                onClick={onSquareClick}
        >
            {value}
        </button>
    );
}

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true)
    const[squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(number:number) {
        if (squares[number] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[number] = "x"
        }
        else {
            nextSquares[number] = "O";
        }
        setSquares(nextSquares);
        setXIsNext(!xIsNext)
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner
    }
    else{
        status = "Next player: " + (xIsNext ? "X" : "O")
    }

    return(
        <>
            <div className="sttus">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

function calculateWinner(squares:any) {
    const winner_lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let row = 0; row < winner_lines.length; row++) {
        const [a, b, c] = winner_lines[row];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
