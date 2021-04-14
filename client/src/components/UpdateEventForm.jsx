import React from 'react'
import {connect} from 'react-redux'
import {UpdateEvent, UpdateFormField} from '../store/actions/UserAction'

const mapStateToProps = ({formState, eventState} ) => {
  return {formState, eventState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUpdateFormField: (formName, formValue) => dispatch(UpdateFormField(formName, formValue)),
    setUpdateEvent: (id, formData) => dispatch(UpdateEvent(id, formData))
  }
}


const UpdateEventForm = (props) => {
  let id = props.match.params.id
  let formUserId = props.match.params.user_id

  const handleChange=(e)=> {
    props.setUpdateFormField(e.target.name, e.target.value)
  }

  const handleSubmit = async (e) => {

    const formData = {
    user_id: formUserId, 
    name: props.formState.name,  
    address:props.formState.address,
    description:props.formState.description,
    date:props.formState.date,
    zipcode:props.formState.zipcode,
    website: props.formState.website,
    longitude:props.formState.longitude,
    latitude: props.formState.latitude,
    attendees: props.formState.attendees
  }
  try {
    props.setUpdateEvent(id, formData)
  } catch (error) {
    throw error
  }
  }



  return (
    <div>
      <h1>Update Event</h1>
      <form type="submit" onSubmit={handleSubmit}>
          <input
          type='hidden'
          name='user_id'
          value = {formUserId}
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
          <button>Update</button>
      </form>

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventForm)