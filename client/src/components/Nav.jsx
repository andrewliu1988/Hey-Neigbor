import React from 'react'
import {NavLink} from 'react-router-dom'


const Nav =() => {
  return (
    <div> 
      <nav> 
        <NavLink to='/'> Business</NavLink>
        <NavLink to='/events'>Events</NavLink>
      </nav>
    </div>
  )
}

export default Nav