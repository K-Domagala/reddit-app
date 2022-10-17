import React from 'react';
import {  useDispatch } from 'react-redux';
import {fetchMeme} from '../../api/util';

export function Nav(){
    let action = {
        value: 'memes',
        method: 'subreddit'
    }
    const dispatch = useDispatch();
    const onClick = async (value, method) => {
        action.value = value;
        action.method = method;
        const newMeme = await fetchMeme(action.value, action.method);
        console.log(newMeme);
        dispatch({type: 'updateMemeTitle', payload: newMeme.title});
        dispatch({type: 'updateMemeImg', payload: newMeme.img});
        //console.log(newMeme);
        dispatch({type: 'changeSubreddit', payload: action.value});
        //dispatch({type: 'updateMeme', payload: newMeme});
    }

    return(
        <header>
            <nav>
                <h1>RaReMeme</h1>
                <button className="button" onClick={() => onClick(action.value, action.method)}>Refresh</button>
                <ul>
                    <li onClick={() => onClick('memes', 'subreddit')}>r/memes</li>
                    <li onClick={() => onClick('rareinsults', 'subreddit')}>r/rareinsults</li>
                    <li onClick={() => onClick('CasualUK', 'subreddit')}>r/CasualUK</li>
                    <input type="text" placeholder='Search...' onChange={(e) => {onClick(e.target.value, 'search')}} />
                </ul>
            </nav>
        </header>
    )
}