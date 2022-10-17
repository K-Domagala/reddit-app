import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from '../meme/memeSlice';

export function Meme(){
    const subreddit = useSelector(state => state.subreddit);
    const memeImg = useSelector(state => state.memeImg);
    const memeTitle = useSelector(state => state.memeTitle);
    const dispatch = useDispatch();

    return(
        <div>
            <br />
            <h1>{memeTitle}</h1>
            <br />
            <img src={memeImg} className='memeImg' />
        </div>
    )
}