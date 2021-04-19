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
    <div>
      <div className='event-details'>
        <img width="500em" src={eventDetails.image} alt="event cover"/>
          <section className="details">
            <h2 className="h2-details"> {eventDetails.name}</h2>
            <h3 className="h3-details"> Happening On: {eventDetails.date}</h3> 
            <h3 className="h3-details">{eventDetails.address}</h3>
            <a  className="h3-details" href={eventDetails.website}>{eventDetails.name} Website</a>
            <p className="description">{eventDetails.description}</p>
            <p className="description">Attendees: {eventDetails.attendees}</p> 
          </section> 
        </div>  
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails)