import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function Meme(){
    const dispatch = useDispatch();
    const memeImg = useSelector(state => state.memeImg);
    const memeTitle = useSelector(state => state.memeTitle);

    return(
        <div>
            <br />
            <h1>{memeTitle}</h1>
            <br />
            <img src={memeImg} className='memeImg' alt='Meme' />
        </div>
    )
}