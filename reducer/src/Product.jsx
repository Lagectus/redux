import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'

const Cart = ({cart,setIsShow}) => {
    if(!cart || cart.length === 0) {
        return <div>No items in cart</div>
    }
    let obj= {};
    let totalPrice = cart.reduce((total, item) => total + item.price, 0);
    cart.forEach(item => {
        if(obj[item.id]){
            obj[item.id].quantity += 1;
        } else {
            obj[item.id] = { ...item, quantity: 1 };
        }
    })
    return (
        <div>
            <button onClick={()=>setIsShow(false)}>close</button>
            { Object.values(obj).map(item => (
                <div key={item.id} className="cart-item">
                    <h3>{item.title}</h3>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                </div>
            ))}
            <h3>{totalPrice.toFixed(2)}</h3>
            </div>
    )
}

const Product = () => {
    let [isShow,setIsShow] = useState(true)
    const initialState = {
        products: [],
        loading: false,
        error: null,
        cart: []
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
            case "ADD_TO_CART":
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
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
    <div>
        <h4 onClick={()=>setIsShow(!isShow)}>cart{state.cart.length}</h4>
        {isShow && <Cart cart={state.cart} setIsShow={setIsShow}/>}
        {
        products.map(product => (
            <div className="bg-red-500" key={product.id} >
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button onClick={() => {
                    dispatch({ type: "ADD_TO_CART", payload: product });
                }}>Add to Cart</button>
            </div>
        ))
        }</div>
  )
}

export default Product