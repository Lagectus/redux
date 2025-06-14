import  {createStore,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk'; // If you want to use thunk middleware
import rootReducer from './reducers/index';

const store = createStore(
    rootReducer , applyMiddleware(thunk) // Assuming you want to use middleware like thunk or logger
);
export default store;