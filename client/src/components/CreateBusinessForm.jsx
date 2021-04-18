import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {UpdateFormField, UploadBusiness, SetUserId, ConverterInput} from '../store/actions/UserAction'
import {AddressToCoordinates, ToggleBusinessAddress} from '../store/actions/BusinessAction'

const mapStateToProps =({formState, businessState}) => {
    return{formState, businessState}
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCreateBusiness: (formName, formValue) => dispatch(UpdateFormField(formName, formValue)),
        setUploadBusiness: (formData) => dispatch(UploadBusiness(formData)),
        setId: (id) => dispatch(SetUserId(id)), 
        converterInput: (formName, formValue) => dispatch(ConverterInput(formName, formValue)),
        convertAddress: (formData) => dispatch(AddressToCoordinates(formData)),
        toggleBusinessAddress: () => dispatch(ToggleBusinessAddress())

    }
}

const CreateBusinessForm = (props) => {

    let user_id = props.match.params.id

    useEffect(()=> {
        props.setId(user_id)
        //eslint-disable-next-line
    },[user_id] )

    const handleChange=(e) => {
        props.setCreateBusiness(e.target.name, e.target.value)
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
        props.toggleBusinessAddress(true)
    }



    const handleSubmit=() => {
        try {props.setUploadBusiness({
        user_id: props.formState.user_id, 
        name: props.formState.name,  
        address: props.businessState.businessCoordinates.formatted_address,
        image: props.formState.image,
        description:props.formState.description,
        date:props.formState.date,
        zipcode:props.businessState.businessCoordinates.address_components.zip,
        website: props.formState.website,
        longitude: props.businessState.businessCoordinates.location.lng,
        latitude: props.businessState.businessCoordinates.location.lat
        })     
        } catch (error) {
        throw error
        }
        props.setId(user_id)
    }


    return (
        <div> 
        <h1 className="h1-input">Create Business Form</h1>

        <div>
            <form className="form-input">
            <h3>Please Enter Full Address:</h3> 
            <input
            text="text"
            className="convertAddressField"
            placeholder="address, zipcode, or location"
            name="location"
            onChange={handleInput}
            />
            <br/>
			<br/>
            <button onClick={handleConvert}>Add Coordinates</button>
            </form>
        </div>

        <div>
            {props.businessState.businessCoordinates.location ? 
            <div className="form-input">
                <p>Please Confirm Address. Run address again to RESET!!!</p> 
                <p>Address: {props.businessState.businessCoordinates.formatted_address}</p>
                <p>Latitiude: {props.businessState.businessCoordinates.location.lat} </p>
                <p>Longitude: {props.businessState.businessCoordinates.location.lng}</p>
            </div>
            :
            <div></div> 
            
            }
        </div>

            <form className="form-input">
                <input
                type='hidden'
                name='user_id'
                value = {props.formState.user_id}
                />
				<h3>NAME:</h3>  	 
                <input
                name="name"
                placeholder="NAME"
                value = {props.formState.name}
                onChange={handleChange}
                className="input-field"/>
				
				<h3>UPLOAD IMAGE: </h3>
                <input 
                name="image"
                placeholder="IMAGE"
                value ={props.formState.image}
                onChange={handleChange}
                className="input-field"/>
                <br/>

				<h3>DESCRIPTION:</h3>
                <textarea
                maxLength="255"
                name="description"
                placeholder="DESCRIPTION"
                value = {props.formState.description}
                onChange={handleChange}
                className="textarea"/>

                <br/>
				<h3>DATE:</h3>	
                <input 
                type="date"
                name="date"
                placeholder="DATE"
                value = {props.formState.date}
                onChange={handleChange}
                className="input-field"/> 

                <br/>
                <h3>WEBSITE (OPTIONAL):</h3>		
                <input 
                name="website"
                placeholder="WEBSITE"
                value = {props.formState.website}
                onChange={handleChange}
                className="input-field"/>
                <br/>
                <br/>
                <button type="button" onClick={handleSubmit}>Add a Business!</button>
            </form>
        </div>
        )
    }


export default connect(mapStateToProps, mapDispatchToProps)(CreateBusinessForm)