import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { updateMemeUtil, fetchMeme } from '../api/util';

const changeSubredditReducer = (state = '/', action) => {
  switch(action.type){
    case 'changeSubreddit':
      return action.payload;
    default:
      return state
  }
}

const updateMemeTitle = (state = '', action) => {
  switch(action.type){
    case 'updateMemeTitle':
      return action.payload;
    default:
      return state
  }
}

const updateMemeImg = (state = '', action) => {
  switch(action.type){
    case 'updateMemeImg':
      return action.payload;
    default:
      return state
  }
}

export const store = configureStore({
  reducer: {
    subreddit: changeSubredditReducer,
    memeTitle: updateMemeTitle,
    memeImg: updateMemeImg
  }
});