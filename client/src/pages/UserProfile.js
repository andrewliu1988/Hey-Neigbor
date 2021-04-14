import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetUserBAndE } from '../store/actions/UserAction'
import BusinessCard from '../components/BusinessCard'
import EventCard from '../components/EventCard'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinessAndEvent: (id) => dispatch(GetUserBAndE(id))
  }
}

const UserProfile = (props) => {
  let id = 1
  let userBusiness = props.userState.userBAndE.businesses
  let userEvent = props.userState.userBAndE.events

  useEffect(() => {
    props.fetchBusinessAndEvent(id)
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
            <div
              onClick={() =>
                props.history.push(`/business_details/${business.id}`)
              }
              key={i}
            >
              <BusinessCard business={business} />
            </div>
          ))
        ) : (
          <h3>Loading</h3>
        )}
      </div>

      <div className="user-event">
        {userEvent ? (
          userEvent.map((event, i) => (
            <div
              onClick={() => props.history.push(`/event_details/${event.id}`)}
              key={i}
            >
              <EventCard event={event} />
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
