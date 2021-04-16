import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import {
  ToggleAuthenicated,
  SetUser
} from '../store/actions/AuthAction'

const mapStateToProps =({authState}) => {
  return {authState}
}

const mapDispatchToProps=(dispatch) => {
  return{
    toggleAuthenticated: () => dispatch(ToggleAuthenicated()),
    setUser: () => dispatch(SetUser)
  }
  
}

const Nav =(props) => {


  const logOut = () => {
    localStorage.clear()
    props.toggleAuthenticated(false)
    props.setUser(null)
  }

  let authenticated = props.authState.authenticated
  return (
    <div> 
      <nav> 
        <NavLink to='/'> Business</NavLink>
        <NavLink to='/events'>Events</NavLink>
        {authenticated ?<NavLink to='/user_profile/:id'> User Profile</NavLink>:
        <NavLink to='/register'>Register</NavLink> }
        
  
        {authenticated ?<NavLink to='/' onClick={logOut}> Logout </NavLink>:
        <NavLink to='/login'>Login</NavLink>}     
      </nav>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps) (Nav)