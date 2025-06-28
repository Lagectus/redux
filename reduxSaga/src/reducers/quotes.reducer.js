import { FETCH_PROD_FAILURE, FETCH_PROD_REQ, FETCH_PROD_SUCCESS } from "../actions/product.action";
import { FETCH_QUOTES_FAILURE, FETCH_QUOTES_REQ, FETCH_QUOTES_SUCCESS } from "../actions/qoutes.action";

const initialState ={
    loading:false,
    quotes:[],
    error:""
}

export const quotesReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_QUOTES_REQ:
            return {...state,loading:true}
        case FETCH_QUOTES_SUCCESS:
            return {loading:false,quotes:action.payload,error:""}
        case FETCH_QUOTES_FAILURE:
            return {loading: false, quotes:[],error:action.payload}
        default:
            return state
    }

}