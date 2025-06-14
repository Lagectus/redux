export const fetchProducts = () => async (dispatch) => {
    dispatch({type: "PRODUCT_REQUEST"})
        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            dispatch({type: "PRODUCT_SUCCESS", payload: data});

        }
        catch (error) {
            dispatch({type: "PRODUCT_FAILURE", payload: error.message});
        }

    
}
