import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {CreateNewBusiness, UploadBusiness} from '../store/actions/UserAction'

const mapStateToProps =({userState}) => {
  return{userState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCreateBusiness: (formName, formValue) => dispatch(CreateNewBusiness(formName, formValue)),
    setUploadBusiness: (formData) => dispatch(UploadBusiness(formData))
  }
}

const CreateBusinessForm = (props) => {

  const handleChange=(e) => {
    props.setCreateBusiness(e.target.name, e.target.value)
  }
  return (
    <div> 
      <h1>Create Business Form</h1>
      <form>
        <input
        type='hidden'
        name='user_id'
        value = {props.userState.user_id}
        />
        <input
            name="name"
            placeholder="name"
            value = {props.userState.name}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input
            name="address"
            placeholder="address"
            value = {props.userState.address}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <textarea
            name="description"
            placeholder="description"
            value = {props.userState.description}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="date"
            placeholder="date"
            value = {props.userState.date}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="zipcode"
            placeholder="zipcode"
            value = {props.userState.zipcode}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="website"
            placeholder="website"
            value = {props.userState.website}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="name"
            placeholder="name"
            value = {props.userState.longitude}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="name"
            placeholder="name"
            value = {props.userState.langitude}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
          <button>Add a Business!</button>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateBusinessForm)