import React from 'react';
import {Square} from "./Square";

export const Board = () => {
    const status = 'Next player: X'
    return (
        <div>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSqure()}
                {renderSqure()}
                {renderSqure()}
            </div>
            <div className='board-row'>
                {renderSqure()}
                {renderSqure()}
                {renderSqure()}
            </div>
            <div className='board-row'>
                {renderSqure()}
                {renderSqure()}
                {renderSqure()}
            </div>
        </div>
    );
};

function renderSqure(){
    return <Square/>
}
