import { combineReducers } from 'redux';

import posts from './postsReducers.js'
import jokes from './jokesReducers.js'

export default combineReducers ({ posts, jokes });