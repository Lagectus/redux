
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    // login: loginReducer, // Assuming you have a loginReducer defined
    // prod: productReducer, // Assuming you have a productReducer defined
});

export default rootReducer;