import React from 'react';
import {  useDispatch } from 'react-redux';
import {fetchMeme} from '../../api/util';

export function Nav(){
    const dispatch = useDispatch();
    const onClick = async (value) => {
        const newMeme = await fetchMeme(value);
        console.log(newMeme);
        dispatch({type: 'updateMemeTitle', payload: newMeme.title});
        dispatch({type: 'updateMemeImg', payload: newMeme.img});
        //console.log(newMeme);
        dispatch({type: 'changeSubreddit', payload: value});
        //dispatch({type: 'updateMeme', payload: newMeme});
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