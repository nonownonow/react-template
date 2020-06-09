import React from 'react';
import {Square} from "./Square";

export const Board = () => {
    const status = 'Next player: X'
    return (
        <>
            <div className='status'>{status}</div>
            <div className='board-row'>
                {renderSqure(1)}
                {renderSqure(2)}
                {renderSqure(3)}
            </div>
            <div className='board-row'>
                {renderSqure(4)}
                {renderSqure(5)}
                {renderSqure(6)}
            </div>
            <div className='board-row'>
                {renderSqure(7)}
                {renderSqure(8)}
                {renderSqure(9)}
            </div>
            <style jsx>{`
                div.status {
                    color: red;
                }
            `}</style>
        </>
    );
};

function renderSqure(n:number) {
    return <Square value={n}/>
}
