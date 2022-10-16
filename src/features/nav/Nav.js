import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from '../nav/navSlice';
import {
    store,
    changeSubreddit
} from '../../app/store';

export function Nav(){
    const dispatch = useDispatch();
    let change = 0
    const onChange = () => {
        change++;
        console.log("Change detected: " + change);
    }
    const onClick = (value) => {
        dispatch({type: 'changeSubreddit', payload: value});
    }

    return(
        <header>
            <nav>
                <h1>RaReMeme</h1>
                <ul>
                    <li onClick={() => onClick('memes')}>r/memes</li>
                    <li onClick={() => onClick('rareinsults')}>r/rareinsults</li>
                    <li onClick={() => onClick('CasualUK')}>r/CasualUK</li>
                    <input type="text" placeholder='Search...' onChange={(e) => {onClick(e.target.value)}} />
                </ul>
            </nav>
        </header>
    )
}