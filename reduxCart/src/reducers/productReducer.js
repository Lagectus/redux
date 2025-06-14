const initialState = {
    products:[],
    loading: false,
    error: null,
}

export default function productReducer(state =initialState, action) {
    switch (action.type){
        case "PRODUCT_REQUEST":
            return {
                ...state,
                loading: true,
                error: null
            };
        case "PRODUCT_SUCCESS":
            return {
                ...state,
                loading: false,
                products: action.payload
            };
        case "PRODUCT_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}
