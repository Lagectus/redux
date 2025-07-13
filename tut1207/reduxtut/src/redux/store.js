import {createStore,applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import counterReducer from './reducer';



const store = createStore(counterReducer,applyMiddleware(thunk));
export default store;