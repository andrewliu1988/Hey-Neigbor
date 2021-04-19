import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {UpdateBusiness, UpdateFormField, SetUserId} from '../store/actions/UserAction'
import {GetBusinessDetails} from '../store/actions/BusinessAction'


const mapStateToProps= ({formState, businessState})=> {
    return {formState, businessState}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setUpdateFormField: (formName, formValue) => dispatch(UpdateFormField(formName, formValue)),
		setUpdateBusiness: (id,formData)=> dispatch(UpdateBusiness(id, formData)),
		fetchDetails: (id) => dispatch(GetBusinessDetails(id)),
		setId: (id) => dispatch(SetUserId(id))
    }
}


const UpdateBusinessForm = (props ) => {

	let id = props.match.params.id
	let formUserId = props.match.params.user_id

	useEffect(() => {
		props.fetchDetails(id)
		//eslint-disable-next-line
		},[])

	const handleChange=(e) => {
	props.setUpdateFormField(e.target.name, e.target.value)
	}

	const handleSubmit = async () => {
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
		props.setId(id)
	}


    return (
		<div> 
			<div className="form-pict-container">
					<div className="login-form">
					<h1 className="h1-input"> Update Business</h1>
					<form className="form-input">
						<input
						type='hidden'
						name='user_id'
						value = {formUserId}
						/>
						<h3>NAME:</h3>
						<input
							name="name"
							placeholder={props.businessState.businessDetails.name}
							value = {props.formState.name}
							onChange={handleChange}
							className="input-field"/>
							<br/>
						<h3>ADDRESS:</h3>
						<input
							name="address"
							placeholder={props.businessState.businessDetails.address}
							value = {props.formState.address}
							onChange={handleChange}
							className="input-field"/>
							<br/>
						<h3>IMAGE:</h3>
						<input 
							name="image"
							placeholder={props.businessState.businessDetails.image}
							value ={props.formState.image}
							onChange={handleChange}
							className="input-field"/>
							<br/>
						<h3>DESCRIPTION:</h3>        
						<textarea
							name="description"
							placeholder={props.businessState.businessDetails.description}
							value = {props.formState.description}
							onChange={handleChange}
							className="textarea"/>
							<br/>
						<h3>DATE:</h3>
						<input
							type="date"
							name="date"
							placeholder={props.businessState.businessDetails.date}				value = {props.formState.date}
							onChange={handleChange}
							className="input-field"/>
							<br/>
						<h3>ZIPCODE:</h3>
						<input 
							name="zipcode"
							placeholder={props.businessState.businessDetails.zipcode}
							value = {props.formState.zipcode}
							onChange={handleChange}
							className="input-field"/>
							<br/>
						<h3>WEBSITE (OPTIONAL): </h3>
						<input 
							name="website"
							placeholder={props.businessState.businessDetails.website}
							value = {props.formState.website}
							onChange={handleChange}
							className="input-field"/>
							<br/>
							<br/>
						<button type="button" onClick={handleSubmit}>Update</button>    
					</form>
			</div>


			<div className="msg-section"> 
				<h1>Help the community by posting!!!</h1>
				<h2>Sign in to start posting!!!</h2>
				<img width="350em" src='https://i.imgur.com/et0YHzg.png'alt="login icon"/>
			</div>


			</div>
		</div>
	)
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateBusinessForm)