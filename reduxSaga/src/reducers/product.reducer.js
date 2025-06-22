import { FETCH_PROD_FAILURE, FETCH_PROD_REQ, FETCH_PROD_SUCCESS } from "../actions/product.action";

const initialState ={
    loading:false,
    product:[],
    error:""
}

export const productReducer = (state = initialState,action)=>{
    switch(action.type){
        case FETCH_PROD_REQ:
            return {...state,loading:true}
        case FETCH_PROD_SUCCESS:
            return {loading:false,product:action.payload,error:""}
        case FETCH_PROD_FAILURE:
            return {loading: false, product:[],error:action.payload}
        default:
            return state
    }

}