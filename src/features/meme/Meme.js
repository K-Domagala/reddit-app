import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from '../meme/memeSlice';

export function Meme(){
    const subreddit = useSelector(state => state.subreddit);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Hello app {subreddit}</h1>
        </div>
    )
}