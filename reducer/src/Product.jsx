import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'

const Product = () => {
    const initialState = {
        products: [],
        loading: false,
        error: null
    }
    const productReducer = (state, action) => {
        switch(action.type){
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
    const [state,dispatch]=useReducer(productReducer, initialState);
    useEffect(()=>{
        const fetchProducts = async () => {
            dispatch({ type: "PRODUCT_REQUEST" });
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                dispatch({ type: "PRODUCT_SUCCESS", payload: data });
            } catch (error) {
                dispatch({ type: "PRODUCT_FAILURE", payload: error.message });
            }
        }
        fetchProducts();
    },[])
    const { products, loading, error } = state;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  return (
    <div>{
        products.map(product => (
            <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
            </div>
        ))
        }</div>
  )
}

export default Product