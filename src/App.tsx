import React from 'react';
import './App.css';
import {Board} from "./Board";

export function App() {
    return (
        <div className='game'>
            <div className="game-board">
                <Board/>
            </div>
            <div className="gmae-info">
                <div>{/*status*/}</div>
                <ol>{/*TODO*/}</ol>
            </div>
        </div>

    );
}

