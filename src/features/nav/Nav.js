import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {} from '../nav/navSlice';

export function Nav(){
    const dispatch = useDispatch();
    let change = 0
    const onChange = () => {
        change++;
        console.log("Change detected: " + change);
    }
    const onClick = (value) => {
        console.log("You clicked on " + value);
    }

    return(
        <header>
            <nav>
                <h1>RaReMeme</h1>
                <ul>
                    <li onClick={() => onClick('memes')}>r/memes</li>
                    <li onClick={() => onClick('rareinsults')}>r/rareinsults</li>
                    <li onClick={() => onClick('CasualUK')}>r/CasualUK</li>
                    <input type="text" placeholder='Search...' onChange={onChange} />
                </ul>
            </nav>
        </header>
    )
}