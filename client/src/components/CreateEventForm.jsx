import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {CreateNewEvent, UploadEvent} from '../store/actions/UserAction'

const mapStateToProps =({userState}) => {
  return{userState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCreateEvent: (formName, formValue) => dispatch(CreateNewEvent(formName, formValue)),
    setUploadEvent: (formData) => dispatch(UploadEvent(formData))
  }
}

const CreateEventForm = (props) => {

  const handleChange=(e) => {
    props.setCreateEvent(e.target.name, e.target.value)
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
        <input 
            name="attendees"
            placeholder="attendees"
            value = {props.userState.attendees}
            onChange={handleChange}
            className="input-feild"/>
          <br/>

          <button>Add a Event!</button>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm)