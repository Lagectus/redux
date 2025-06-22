import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProdReq } from './actions/product.action';

const ProductionList = () => {
    const dispatch = useDispatch();
    let data= useSelector(state=>state)
    console.log(data);
    useEffect(()=>{
        dispatch(fetchProdReq())
    },[])
    
  return (
    <div>ProductionList</div>
  )
}

export default ProductionList