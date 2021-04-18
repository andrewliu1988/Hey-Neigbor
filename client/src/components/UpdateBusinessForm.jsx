import React from 'react'
import {connect} from 'react-redux'
import {UpdateBusiness, UpdateFormField } from '../store/actions/UserAction'


const mapStateToProps= ({formState, businessState})=> {
  return {formState, businessState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUpdateFormField: (formName, formValue) => dispatch(UpdateFormField(formName, formValue)),
    setUpdateBusiness: (id,formData)=> dispatch(UpdateBusiness(id, formData))
  }
}


const UpdateBusinessForm = (props ) => {
  let id = props.match.params.id
  let formUserId = props.match.params.user_id

  const handleChange=(e) => {
    props.setUpdateFormField(e.target.name, e.target.value)
  }

  const handleSubmit = async (e) => {

    const formData = {
      user_id: formUserId, 
      name: props.formState.name,  
      address:props.formState.address,
      image: props.formState.image,
      description:props.formState.description,
      date:props.formState.date,
      zipcode:props.formState.zipcode,
      website: props.formState.website,
    }
    try {
       props.setUpdateBusiness(id, formData)
    } catch (error) {
      throw error   
    }
  }


  return (
    <div> 
      <h1 className="h1-input"> Update Form</h1>
      <form className="form-input">
          <input
          type='hidden'
          name='user_id'
          value = {formUserId}
          />
        <h3>NAME:</h3>
        <input
            name="name"
            placeholder="name"
            value = {props.formState.name}
            onChange={handleChange}
            className="input-field"/>
            <br/>
        <h3>ADDRESS:</h3>
        <input
            name="address"
            placeholder="address"
            value = {props.formState.address}
            onChange={handleChange}
            className="input-field"/>
            <br/>
        <h3>IMAGE:</h3>
        <input 
            name="image"
            placeholder="image"
            value ={props.formState.image}
            onChange={handleChange}
            className="input-field"/>
            <br/>
        <h3>DESCRIPTION:</h3>        
        <textarea
            name="description"
            placeholder="description"
            value = {props.formState.description}
            onChange={handleChange}
            className="textarea"/>
            <br/>
        <h3>DATE:</h3>
        <input 
            name="date"
            placeholder="date"
            value = {props.formState.date}
            onChange={handleChange}
            className="input-field"/>
            <br/>
        <h3>ZIPCODE:</h3>
        <input 
            name="zipcode"
            placeholder="zipcode"
            value = {props.formState.zipcode}
            onChange={handleChange}
            className="input-field"/>
            <br/>
        <h3>WEBSITE</h3>
        <input 
            name="website"
            placeholder="website"
            value = {props.formState.website}
            onChange={handleChange}
            className="input-field"/>
            <br/>
            <br/>
          <button type="button" onClick={handleSubmit}>Update</button>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateBusinessForm)