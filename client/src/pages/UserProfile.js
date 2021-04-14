import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  GetUserBAndE,
  DeleteBusiness,
  DeleteEvent
} from '../store/actions/UserAction'
import BusinessCard from '../components/BusinessCard'
import EventCard from '../components/EventCard'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinessAndEvent: (id) => dispatch(GetUserBAndE(id)),
    deleteBusiness: (id) => dispatch(DeleteBusiness(id)),
    deleteEvent: (id) => dispatch(DeleteEvent(id))
  }
}

const UserProfile = (props) => {
  let id = 1
  console.log(props.userState.userBAndE)
  let userBusiness = props.userState.userBAndE.businesses
  let userEvent = props.userState.userBAndE.events

  useEffect(() => {
    props.fetchBusinessAndEvent(id)
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>User Profile</h1>
      <button onClick={() => props.history.push(`/create_business/${id}`)}>
        Create Business
      </button>
      <button onClick={() => props.history.push(`/create_event/${id}`)}>
        Create Event
      </button>

      <div className="user-business">
        {userBusiness ? (
          userBusiness.map((business, i) => (
            <div key={i}>
              <BusinessCard business={business} />
              <button onClick={() => props.deleteBusiness(business.id)}>
                Delete
              </button>
              <br />
              <button
                onClick={() =>
                  props.history.push(`/business_details/${business.id}`)
                }
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <h3>Loading</h3>
        )}
      </div>

      <div className="user-event">
        {userEvent ? (
          userEvent.map((event, i) => (
            <div key={i}>
              <EventCard
                event={event}
                onClick={() => props.history.push(`/event_details/${event.id}`)}
                key={i}
              />
              <button onClick={() => props.deleteEvent(event.id)}>
                Delete
              </button>
              <button
                onClick={() => props.history.push(`/event_details/${event.id}`)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
