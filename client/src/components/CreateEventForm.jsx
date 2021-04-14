import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {CreateNewEvent, UploadEvent, SetUserId} from '../store/actions/UserAction'

const mapStateToProps =({formState}) => {
  return{formState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCreateEvent: (formName, formValue) => dispatch(CreateNewEvent(formName, formValue)),
    setUploadEvent: (formData) => dispatch(UploadEvent(formData)),
    setId: (id) => dispatch(SetUserId(id))
  }
}

const CreateEventForm = (props) => {
  let id = props.match.params.id

  useEffect(() => {
    props.setId(id)
    //eslint-disable-next-line
  },[id])
  

  const handleChange=(e) => {
    props.setCreateEvent(e.target.name, e.target.value)
  }

  const handleSubmit=(e)=> {
    // e.preventDefault()
    props.setUploadEvent(props.formState)
  }

  return (
    <div> 
      <h1>Create Event Form</h1>
      <form type='submit' onSubmit={handleSubmit}>
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
            name="latitude"
            placeholder="latitude"
            value = {props.formState.latitude}
            onChange={handleChange}
            className="input-feild"/>
            <br/>        
        <input 
            name="attendees"
            placeholder="attendees"
            value = {props.formState.attendees}
            onChange={handleChange}
            className="input-feild"/>
          <br/>

          <button>Add a Event!</button>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm)