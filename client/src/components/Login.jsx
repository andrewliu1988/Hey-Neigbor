import React from 'react'
import {connect } from 'react-redux'
import {SignIn, AuthFormField} from '../store/actions/AuthAction'


const mapStateToProps = ({authState}) => {
  return {authState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSignInForm: (formName, formValue) => dispatch(AuthFormField(formName, formValue)),
    setLogin: (authForm) => dispatch(SignIn(authForm)), 

  }
}


const Login = (props) => {

  const handleChange =(e) => {
    props.setSignInForm(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    const authForm = {
      username: props.authState.username,
      password_digest: props.authState.password_digest
    }
    try {
      props.setLogin(authForm)
      props.history.push('/')
    } catch (error) {
      return alert('Your username or password is incorrect')
    }
  }



  return (
    <div>
      <div className="form-pict-container">
        <div className="login-form">
        <h1 className="h1-input"> Sign In</h1>
            <form className="form-input">
              <h3>User Name:</h3>
              <input
              name ="username"
              placeholder="username"
              value={props.authState.username}
              onChange={handleChange}
              required
              className="input-field"
              />
              <br/>
              <br/>
              <h3>Password:</h3>
              <input
              type="password"
              name='password_digest'
              placeholder="password"
              value={props.authState.password_digest}
              onChange={handleChange}
              required
              className='input-field'
              />
              <br/>
              <br/>
              <br/>
              <button 
              className="signin-btn"
              type='button'onClick= {handleSubmit}>Login <i className="fa fa-sign-in" aria-hidden="true"></i> </button>
            </form>
          </div>

        <div className="msg-section"> 
          <h1>Help the community by posting!!!</h1>
          <h2>Sign in to start posting!!!</h2>
          <img width="350em" src='https://i.imgur.com/jB84JLZ.png'alt="login icon"/>
        </div>
      </div>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps) (Login)


