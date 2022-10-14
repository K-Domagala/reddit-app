import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from '../meme/memeSlice';

export function Meme(){
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Hello app</h1>
        </div>
    )
}