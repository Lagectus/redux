import React from 'react'

const Footer = () => {
  return (
    <div className='footer' style={{textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa'}}>
        <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        <p>Follow us on 
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a>, 
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a>, 
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </p>
    </div>
  )
}

export default Footer