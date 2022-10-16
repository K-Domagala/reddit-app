import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

const changeSubredditReducer = (state = '/', action) => {
  switch(action.type){
    case 'changeSubreddit':
      return action.payload;
    default:
      return state
  }
}

export const store = configureStore({
  reducer: {
    subreddit: changeSubredditReducer
  }
});