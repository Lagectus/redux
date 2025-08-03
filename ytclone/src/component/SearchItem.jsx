import React from 'react'
import { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';

const SearchItem = () => {
    const [searchTerm,setSearchTerm] = useState("srk song");
    const [submitOrNot,setSubmitOrNot] = useState(false);

    const submitHandler = ()=>{
      on
    }


  return (
    <div>
        <InputGroup className='mt-3 mb-3'>
        <Form.Control 
        placeholder='"search...'
        onChange={(e)=>setSearchTerm(e.target.value)}
        value={searchTerm}/>
        <Button variant='primary' type='button' onClick={submitHandler}>Search</Button>
        </InputGroup>
    </div>
  )
}

export default SearchItem

// AIzaSyAuPRFGEThXhkD8VNBqiVMAmYE6KebjdKA