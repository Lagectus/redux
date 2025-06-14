import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/productActions';
import { use } from 'react';
import { useEffect } from 'react';


const ProductList = () => {
    const dispatch = useDispatch();

    
    const {products,loading,error} = useSelector(state => state.product);
    console.log(products, loading, error);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    

  return (
    <>
    <h2>Products</h2>
    {loading && <p>Loading...</p>}
    {error && <p>Error: {error}</p>}
    <div>
        {products.map(product => (
            <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default ProductList