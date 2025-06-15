import {applyMiddleware, createStore}  from 'redux';
import rootReducer from './reducers/index';
import {thunk} from 'redux-thunk'; // Import thunk middleware for async actions
const store = createStore(
    rootReducer , applyMiddleware(thunk)// Assuming you want to use middleware like thunk or logger
);
export default store;