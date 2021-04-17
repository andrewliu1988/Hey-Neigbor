import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {UpdateFormField, UploadEvent, SetUserId, ConverterInput} from '../store/actions/UserAction'
import {AddressToCoordinates} from '../store/actions/EventAction'

const mapStateToProps =({formState, eventState}) => {
  return{formState, eventState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCreateEvent: (formName, formValue) => dispatch(UpdateFormField(formName, formValue)),
    setUploadEvent: (formData) => dispatch(UploadEvent(formData)),
    setId: (id) => dispatch(SetUserId(id)),
    converterInput: (formName, formValue) => dispatch(ConverterInput(formName, formValue)),
    convertAddress: (formData) => dispatch(AddressToCoordinates(formData))
  }
}

const CreateEventForm = (props) => {

  // console.log(props.eventState.eventCoordinates.location.lat)
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
    props.setUploadEvent({      
      user_id: props.formState.user_id, 
      name: props.formState.name,  
      address:props.formState.address,
      description:props.formState.description,
      date:props.formState.date,
      zipcode:props.formState.zipcode,
      website: props.formState.website,
      longitude: props.eventState.eventCoordinates.location.lng,
      latitude: props.eventState.eventCoordinates.location.lat,
      attendees: props.formState.attendees
      })  
  }

  const handleInput =(e) => {
    props.converterInput(e.target.name, e.target.value)
  }


  const handleConvert = async (e) => {
    e.preventDefault()
    try {
      await props.convertAddress(props.formState.location)
    } catch (error) {
      throw error
    }
  }




  return (
    <div> 
      <h1>Create Event Form</h1>

    <div>
    <form>
      <input
      text="text"
      className="convertAddressField"
      placeholder="address, zipcode, or location"
      name="location"
      onChange={handleInput}
      />
      <button onClick={handleConvert}>Add Coordinates</button>
    </form>
     </div>









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
            type="date"
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