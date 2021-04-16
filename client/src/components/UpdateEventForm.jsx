import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {UpdateEvent, UpdateFormField} from '../store/actions/UserAction'
import {GetEventDetails} from '../store/actions/EventAction'

const mapStateToProps = ({formState, eventState, userState } ) => {
  return {formState, eventState, userState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUpdateFormField: (formName, formValue) => dispatch(UpdateFormField(formName, formValue)),
    setUpdateEvent: (id, formData) => dispatch(UpdateEvent(id, formData)),
    fetchDetails: (id) => dispatch(GetEventDetails(id))
  }
}


const UpdateEventForm = (props) => {
  const id = props.match.params.id
  const formUserId = props.match.params.user_id
  console.log(props.eventState.eventDetails.user_id)



  useEffect(() => {
    props.fetchDetails(id)
  },[])

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
    // longitude: props.formState.longitude,
    // latitude: props.formState.latitude,
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
            placeholder={props.eventState.eventDetails.name}
            value = {props.formState.name}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input
            name="address"
            placeholder={props.eventState.eventDetails.address}
            value = {props.formState.address}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <textarea
            name="description"
            placeholder={props.eventState.eventDetails.description}
            value = {props.formState.description}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            type= "date"
            name="date"
            placeholder={props.eventState.eventDetails.date}
            value = {props.formState.date}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="zipcode"
            placeholder={props.eventState.eventDetails.zipcode}
            value = {props.formState.zipcode}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
        <input 
            name="website"
            placeholder={props.eventState.eventDetails.website}
            value = {props.formState.website}
            onChange={handleChange}
            className="input-feild"/>
            <br/>
          <input 
            name="attendees"
            placeholder={props.eventState.eventDetails.attendees}
            value = {props.formState.attendees}
            onChange={handleChange}
            className="input-feild"/>
          <br/>  
        <input
            type="hidden"
            name="longitude"
            placeholder={props.eventState.eventDetails.longitude}
            value = {props.eventState.eventDetails.longitude}
            className="input-feild"/>
            <br/>
        <input 
            type="hidden"
            name="latitude"
            placeholder={props.eventState.eventDetails.latitude}
            value = {props.eventState.eventDetails.latitude}
            className="input-feild"/>
            <br/>
          <button>Update</button>
      </form>

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventForm)