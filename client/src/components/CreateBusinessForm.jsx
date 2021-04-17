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



  const handleSubmit=(e) => {
    e.preventDefault()
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
    
  }


  return (
    <div> 
      <h1>Create Business Form</h1>

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
        {props.businessState.businessCoordinates.location ? 
          <div>
            <p>{props.businessState.businessCoordinates.formatted_address}</p>
          </div>
          :
          <div></div> 
          
        }
    </div>

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
            type ="date"
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
          <button>Add a Business!</button>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(CreateBusinessForm)