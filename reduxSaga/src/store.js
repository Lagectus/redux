import {createStore,applyMiddleware, combineReducers} from "redux"
import createSageMiddleware from "redux-saga"
import { productReducer } from "./reducers/product.reducer"
import { rootSaga } from "./saga"
import { quotesReducer } from "./reducers/quotes.reducer"

let rootreducer = combineReducers({
    prod:productReducer,
    quote:quotesReducer
})

const sagaMiddleware = createSageMiddleware();
const store = createStore(rootreducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;