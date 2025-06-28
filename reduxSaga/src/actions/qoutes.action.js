export const FETCH_QUOTES_REQ = "FETCH_QUOTES_REQ";
export const FETCH_QUOTES_SUCCESS = "FETCH_QUOTES_SUCCESS";
export const FETCH_QUOTES_FAILURE = "FETCH_QUOTES_FAILURE";


export const fetchQUOTESReq=()=>({type:FETCH_QUOTES_REQ})
export const fetchQUOTESSuccess=(QUOTES)=>({type:FETCH_QUOTES_SUCCESS,payload:QUOTES})
export const fetchQUOTESFailure =(err)=>({type:FETCH_QUOTES_FAILURE,payload:err})