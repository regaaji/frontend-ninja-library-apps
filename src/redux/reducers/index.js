import {combineReducers} from 'redux';
import authorReducers from './author';
import genreReducers from './genre';
import bookReducers from './book';
import authReducers from './auth';
// import profile from './books';

const reducers = combineReducers({
    author: authorReducers,
    genre: genreReducers,
    book: bookReducers,
    auth: authReducers
})

export default reducers