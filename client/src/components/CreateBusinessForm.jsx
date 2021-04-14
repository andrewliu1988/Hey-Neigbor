import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {CreateNewBusiness, UploadBusiness, SetUserId} from '../store/actions/UserAction'

const mapStateToProps =({formState}) => {
  return{formState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCreateBusiness: (formName, formValue) => dispatch(CreateNewBusiness(formName, formValue)),
    setUploadBusiness: (formData) => dispatch(UploadBusiness(formData)),
    setId: (id) => dispatch(SetUserId(id))

  }
}

const CreateBusinessForm = (props) => {

  let user_id = props.match.params.id

  useEffect(()=> {
    props.setId(user_id)
    //eslint-disable-next-line
  },[props.user_id] )

  const handleChange=(e) => {
    props.setCreateBusiness(e.target.name, e.target.value)
  }

  const handleSubmit=(e) => {
    props.setUploadBusiness({
      user_id: props.formState.user_id, 
      name: props.formState.name,  
      address:props.formState.address,
      description:props.formState.description,
      date:props.formState.date,
      zipcode:props.formState.zipcode,
      website: props.formState.website,
      longitude:props.formState.longitude,
      langitude: props.formState.langitude
      })
  }


  return (
    <div> 
      <h1>Create Business Form</h1>
      <form type="submit" onSubmit={handleSubmit}>
          <input
          type='hidden'
          name='user_id'
          value = {props.formState.user_id}
          />
        <input
            name="name"
            placeholder="name"
            value = {props.formState.name}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input
            name="address"
            placeholder="address"
            value = {props.formState.address}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <textarea
            name="description"
            placeholder="description"
            value = {props.formState.description}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="date"
            placeholder="date"
            value = {props.formState.date}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="zipcode"
            placeholder="zipcode"
            value = {props.formState.zipcode}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="website"
            placeholder="website"
            value = {props.formState.website}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="longitude"
            placeholder="longitude"
            value = {props.formState.longitude}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="langitude"
            placeholder="langitude"
            value = {props.formState.langitude}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
          <button>Add a Business!</button>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateBusinessForm)