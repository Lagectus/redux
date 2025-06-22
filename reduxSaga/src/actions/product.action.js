export const FETCH_PROD_REQ = "FETCH_PROD_REQ";
export const FETCH_PROD_SUCCESS = "FETCH_PROD_SUCCESS";
export const FETCH_PROD_FAILURE = "FETCH_PROD_FAILURE";


export const fetchProdReq=()=>({type:FETCH_PROD_REQ})
export const fetchProdSuccess=(prod)=>({type:FETCH_PROD_SUCCESS,payload:prod})
export const fetchProdFailure =(err)=>({type:FETCH_PROD_FAILURE,payload:err})