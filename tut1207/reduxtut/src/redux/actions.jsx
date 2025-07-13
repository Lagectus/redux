export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const getData= ()=>async(dispatch)=>{
  dispatch({type:"data_loading"})
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    dispatch({type:"data_success",payload:data})
  } catch (error) {
    dispatch({type:"data_error",payload:error.message})
  }
}
export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}