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

  useEffect(() => {
    props.fetchDetails(id)
    //eslint-disable-next-line
  },[])

  const handleChange=(e)=> {
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
      <h1 className='h1-input '>Update Event</h1>
      <form className="form-input">
          <input
          type='hidden'
          name='user_id'
          value = {formUserId}
          />
        <h3>NAME:</h3>
        <input
            name="name"
            placeholder={props.eventState.eventDetails.name}
            value = {props.formState.name}
            onChange={handleChange}
            className="input-field"/>
            <br/>
            <br/>
        <h3>ADDRESS:</h3>    
        <input
            name="address"
            placeholder={props.eventState.eventDetails.address}
            value = {props.formState.address}
            onChange={handleChange}
            className="input-field"/>
            <br/>
            <br/>
        <h3>IMAGE:</h3>    
        <input 
            name="image"
            placeholder="image"
            value ={props.formState.image}
            onChange={handleChange}
            className="input-field"/>
            <br/>
            <br/>
        <h3>DESCRIPTION:</h3>        
        <textarea
            name="description"
            placeholder={props.eventState.eventDetails.description}
            value = {props.formState.description}
            onChange={handleChange}
            className="textarea"/>
            <br/>
            <br/>
        <h3>DATE:</h3>          
        <input 
            type= "date"
            name="date"
            placeholder={props.eventState.eventDetails.date}
            value = {props.formState.date}
            onChange={handleChange}
            className="input-field"/>
            <br/>
            <br/>
        <h3>ZIPCODE:</h3>    
        <input 
            name="zipcode"
            placeholder={props.eventState.eventDetails.zipcode}
            value = {props.formState.zipcode}
            onChange={handleChange}
            className="input-field"/>
            <br/>
            <br/>
        <h3>WEBSITE:</h3>    
        <input 
            name="website"
            placeholder={props.eventState.eventDetails.website}
            value = {props.formState.website}
            onChange={handleChange}
            className="input-field"/>
            <br/>
            <br/>
        <h3>ATTENDEES:</h3>  
          <input 
            name="attendees"
            placeholder={props.eventState.eventDetails.attendees}
            value = {props.formState.attendees}
            onChange={handleChange}
            className="input-field"/>
          <br/>
          <br/>
          <button type="button" onClick={handleSubmit}>Update</button>
      </form>

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateEventForm)