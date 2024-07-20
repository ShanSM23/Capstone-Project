import React from 'react'
import './Error.css';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className='Error'>
        <h1>404 Error</h1>
        <p>Sorry, page not found</p>
        <Link to='/'><button>Back to home</button></Link>
    </div>
  )
}
export default Error
