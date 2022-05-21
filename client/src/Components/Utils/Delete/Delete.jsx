import React from 'react'
import { Link } from 'react-router-dom';

export default function Delete() {
  
  return (
    <div className='delete'>
      <h1>Deleted successfully!</h1>
      <div className='delete__img'></div>
      <Link to={'./landings'}>
          <button className="nav__button-active">
            BACK LANDINGS
        </button>
      </Link>
    </div>
  )
}
