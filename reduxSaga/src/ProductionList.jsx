import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProdReq } from './actions/product.action';
import { fetchQUOTESReq } from './actions/qoutes.action';

const ProductionList = () => {
    const dispatch = useDispatch();
    let {prod,quote}= useSelector(state=>state)
    let {loading}=prod
    let {qoutes}= quote
    useEffect(()=>{
        dispatch(fetchProdReq())
        dispatch(fetchQUOTESReq())
    },[])
    
  return (
    <div>ProductionList</div>
  )
}

export default ProductionList