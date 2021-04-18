import '../style/UserProfile.css'

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  GetUserBAndE,
  DeleteBusiness,
  DeleteEvent
} from '../store/actions/UserAction'
import { CheckSession } from '../store/actions/AuthAction'
import BusinessCard from '../components/BusinessCard'
import EventCard from '../components/EventCard'

const mapStateToProps = ({ userState, authState }) => {
  return { userState, authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinessAndEvent: (id) => dispatch(GetUserBAndE(id)),
    deleteBusiness: (id) => dispatch(DeleteBusiness(id)),
    deleteEvent: (id) => dispatch(DeleteEvent(id)),
    checkSession: (token) => dispatch(CheckSession(token))
  }
}

const UserProfile = (props) => {
  let id = props.authState.current_user
  let userBusiness = props.userState.userBAndE.businesses
  let userEvent = props.userState.userBAndE.events

  useEffect(() => {
    props.fetchBusinessAndEvent(id)
    //eslint-disable-next-line
  }, [id])

  return (
    <div>
      <h1>User Profile</h1>
      <button onClick={() => props.history.push(`/create_business/${id}`)}>
        Create Business
      </button>
      <button onClick={() => props.history.push(`/create_event/${id}`)}>
        Create Event
      </button>
      <div className="business_event_container">
        <div className="user-business">
          {userBusiness ? (
            userBusiness.map((business, i) => (
              <div key={i} className="business-card">
                <BusinessCard business={business} />
                <button onClick={() => props.deleteBusiness(business.id)}>
                  Delete
                </button>
                <button
                  onClick={() =>
                    props.history.push(`/business_details/${business.id}`)
                  }
                >
                  View Details
                </button>
                <button
                  onClick={(id) =>
                    props.history.push(
                      `/update_business/${business.id}/${business.user_id}`
                    )
                  }
                >
                  Update Business
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
              <div key={i} className="event-card">
                <EventCard event={event} />
                <button onClick={() => props.deleteEvent(event.id)}>
                  Delete
                </button>
                <button
                  onClick={(id) =>
                    props.history.push(`/event_details/${event.id}`)
                  }
                >
                  View Details
                </button>
                <button
                  onClick={(id) =>
                    props.history.push(
                      `/update_event/${event.id}/${event.user_id}`
                    )
                  }
                >
                  Update Event
                </button>
              </div>
            ))
          ) : (
            <h3>Loading</h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
