import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {GetEventDetails} from '../store/actions/EventAction'

const mapStateToProps = ({eventState}) => {
  return {eventState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEventDetails: (id) => dispatch(GetEventDetails(id))
  }
}


const EventDetails = (props) => {
  let id = props.match.params.id
  let eventDetails = props.eventState.eventDetails

  useEffect(() => {
    props.fetchEventDetails(id)
     //eslint-disable-next-line
  }, [])


  return (
    <div className='event-details'>
      <h1> Details </h1> 
      <h2> {eventDetails.name}</h2>
      <h3>Grand Opening: {eventDetails.date}</h3> 
      <h3>{eventDetails.address} {eventDetails.zipcode} </h3>
      <a href={eventDetails.website}>{eventDetails.website}</a>
      <p>{eventDetails.description}</p>
      <p>{eventDetails.attendees}</p>      
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)