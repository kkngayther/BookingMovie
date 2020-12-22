import {applyMiddleware, combineReducers, createStore} from 'redux';
import {QuanLyPhimReducer} from './QuanLyPhimReducer';
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    QuanLyPhimReducer
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk))