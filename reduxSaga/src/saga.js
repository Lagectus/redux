import { call,put ,takeEvery} from "redux-saga/effects"
// call ->calls the async function and wait for its response 
// put it is used for dispatching the action 
// takesevery it is used to call the fuction  

import axios from "axios";
import {FETCH_PROD_REQ,fetchProdSuccess,fetchProdFailure} from "./actions/product.action"

// worker action 
function* fetchProductsSaga(){
    try{
        const response = yield call(()=>axios.get('https://fakestoreap.com/products'))
        yield put(fetchProdSuccess(response.data))
    }
    catch(err){
        console.log(err);
        
        yield put(fetchProdFailure(err.message))

    }
}

// listener 
export function* rootSaga(){
    yield takeEvery(FETCH_PROD_REQ,fetchProductsSaga)
}