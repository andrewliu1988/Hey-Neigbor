import React from 'react'
import {connect} from 'react-redux'
import {SignUp, AuthFormField, ToggleCompleteRegister} from '../store/actions/AuthAction'

const mapStateToProps= ({authState})=> {
  return {authState}
}

const mapDispatchToProps=(dispatch)=> {
  return {
    setSignUpForm: (formName, formValue) => dispatch(AuthFormField(formName, formValue)),
    setRegister: (authForm) => dispatch(SignUp(authForm)),
    toggleCompleteResister: () => dispatch(ToggleCompleteRegister())
  }
}


const RegisterForm = (props) => {

  const handleChange = (e) => {
    props.setSignUpForm(e.target.name, e.target.value)
  }

  const handleSubmit=(e) => {
    e.preventDefault()
    props.setRegister({username: props.authState.username, 
    email: props.authState.email,
    password_digest: props.authState.password_digest,
    zipcode: props.authState.zipcode})
    props.history.push('/login')
  }

  return (
    <div>
      <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
          name="username"
          placeholder="username"
          value={props.authState.username}
          onChange={handleChange}
          required
          />
          <input
          name="email"
          placeholder="email"
          value={props.authState.email}
          onChange={handleChange}
          required
          />
          <input
          type="password"
          name="password_digest"
          placeholder="password"
          value={props.authState.password_digest}
          onChange={handleChange}
          required
          />
          <input
          type="text"
          name="zipcode"
          placeholder="zipcode"
          value={props.authState.zipcode}
          onChange={handleChange}
          />
          <button> Register</button>
        </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)



