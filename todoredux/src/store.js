import {applyMiddleware, createStore}  from 'redux';
import rootReducer from './reducers/index';
import {thunk} from 'redux-thunk'; // Import thunk middleware for async actions
import pokemonReducer from './reducers/pokemon.reducer';
const store = createStore(
    pokemonReducer , applyMiddleware(thunk)// Assuming you want to use middleware like thunk or logger
);
export default store;