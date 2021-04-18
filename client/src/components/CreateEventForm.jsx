import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {UpdateFormField, UploadEvent, SetUserId, ConverterInput} from '../store/actions/UserAction'
import {AddressToCoordinates, ToggleEventAddress} from '../store/actions/EventAction'

const mapStateToProps =({formState, eventState}) => {
	return{formState, eventState}
	}

const mapDispatchToProps = (dispatch) => {
	return {
    setCreateEvent: (formName, formValue) => dispatch(UpdateFormField(formName, formValue)),
    setUploadEvent: (formData) => dispatch(UploadEvent(formData)),
    setId: (id) => dispatch(SetUserId(id)),
    converterInput: (formName, formValue) => dispatch(ConverterInput(formName, formValue)),
    convertAddress: (formData) => dispatch(AddressToCoordinates(formData)),
    toggleEventAddress: () => dispatch(ToggleEventAddress())
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

	const handleSubmit=()=> {
		props.setUploadEvent({      
			user_id: props.formState.user_id, 
			name: props.formState.name,  
			address:props.eventState.eventCoordinates.formatted_address,
			image: props.formState.image,
			description:props.formState.description,
			date:props.formState.date,
			zipcode:props.eventState.eventCoordinates.address_components.zip,
			website: props.formState.website,
			longitude: props.eventState.eventCoordinates.location.lng,
			latitude: props.eventState.eventCoordinates.location.lat,
			attendees: props.formState.attendees
		})
		props.setId(id) 
		props.history.push('/user_profile/:id')
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
		props.toggleEventAddress(true)
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

	<div>
		{props.eventState.eventCoordinates.location ? 
			<div>
			<p>{props.eventState.eventCoordinates.formatted_address}</p>
			</div>
			:
			<div></div> 
			
		}
	</div>


    <form >
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
            name="image"
            placeholder="image"
            value ={props.formState.image}
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

			<button type='button' onClick={handleSubmit}>Add a Event!</button>
		</form>
	</div>
	)
	}


export default connect(mapStateToProps, mapDispatchToProps)(CreateEventForm)