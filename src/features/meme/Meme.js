import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from '../meme/memeSlice';

export function Meme(){
    const dispatch = useDispatch();
    const {subreddit, setSubreddit} = useState();

    return(
        <div>
            <h1>Hello app</h1>
        </div>
    )
}