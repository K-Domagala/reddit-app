import React from 'react';
import { useSelector } from 'react-redux';

export function Meme(){
    const memeImg = useSelector(state => state.memeImg);
    const memeTitle = useSelector(state => state.memeTitle);

    return(
        <div>
            <br />
            <h1>{memeTitle}</h1>
            <br />
            <img src={memeImg} className='memeImg' alt='Meme Image' />
        </div>
    )
}