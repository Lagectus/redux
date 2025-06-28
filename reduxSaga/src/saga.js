import { call,put ,takeEvery,all} from "redux-saga/effects"
// call ->calls the async function and wait for its response 
// put it is used for dispatching the action 
// takesevery it is used to call the fuction  

import axios from "axios";
import {FETCH_PROD_REQ,fetchProdSuccess,fetchProdFailure} from "./actions/product.action"
import { FETCH_QUOTES_REQ, fetchQUOTESFailure, fetchQUOTESSuccess } from "./actions/qoutes.action";

// worker action 
function* fetchProductsSaga(){
    try{
        const response = yield call(()=>axios.get('https://fakestoreapi.com/products'))
        console.log(response,"ddddd");
        
        yield put(fetchProdSuccess(response.data))
    }
    catch(err){
        console.log(err);
        
        yield put(fetchProdFailure(err.message))

    }
}

// worker action 
function* fetchQuotesData(){
    try{
        const response = yield call(()=>axios.get('https://dummyjson.com/quotes'))
        console.log(response,"qoues");
        
        yield put(fetchQUOTESSuccess(response.data))
    }
    catch(err){
        console.log(err);
        
        yield put(fetchQUOTESFailure(err.message))

    }
}

function* QuoteSaga(){
    yield takeEvery(FETCH_QUOTES_REQ,fetchQuotesData);
}

function* productSaga(){
    yield takeEvery(FETCH_PROD_REQ,fetchProductsSaga);
}

// listener 
export function* rootSaga(){
    yield all([QuoteSaga(),productSaga()])
}