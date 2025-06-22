import {createStore,applyMiddleware} from "redux"
import createSageMiddleware from "redux-saga"
import { productReducer } from "./reducers/product.reducer"
import { rootSaga } from "./saga"

const sagaMiddleware = createSageMiddleware();
const store = createStore(productReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;