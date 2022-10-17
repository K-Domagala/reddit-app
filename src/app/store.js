import { configureStore } from '@reduxjs/toolkit';

const changeSubredditReducer = (state = '/', action) => {
  switch(action.type){
    case 'changeSubreddit':
      return action.payload;
    default:
      return state
  }
}

const updateMemeTitle = (state = 'Welcome to the Random Reddit Meme app. Click on the links above, or search ur own meme to get started.', action) => {
  switch(action.type){
    case 'updateMemeTitle':
      return action.payload;
    default:
      return state
  }
}

const updateMemeImg = (state = 'https://en.meming.world/images/en/d/d0/Crying_Cat.jpg', action) => {
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