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
      <h1 className="h1-input">Sign Up</h1>
        <form className="form-input">
          <h3>USERNAME:</h3>
          <br/>
          <input
          name="username"
          placeholder="USERNAME"
          value={props.authState.username}
          onChange={handleChange}
          className="input-field"
          required
          />
          <br/>
          <br/>
          <h3>EMAIL:</h3>
          <input
          name="email"
          placeholder="EMAIL"
          value={props.authState.email}
          onChange={handleChange}
          required
          className="input-field"
          />
          <br/>
          <br/>
          <h3>PASSWORD:</h3>
          <input
          type="password"
          name="password_digest"
          placeholder="PASSWORD"
          value={props.authState.password_digest}
          onChange={handleChange}
          className="input-field"
          required
          />
          <br/>
          <br/>
          <h3>ZIPCODE:</h3>
          <input
          type="text"
          name="zipcode"
          placeholder="ZIPCODE"
          value={props.authState.zipcode}
          onChange={handleChange}
          className="input-field"
          />
          <br/>
          <br/>
          <button type="button" onClick={handleSubmit}> Register</button>
        </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)



