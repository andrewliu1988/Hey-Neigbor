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
      <h2 className="user-profile-title">User Dashboard</h2>
      <h3 className="h3-input">
        To get started, create business or event to add to dashboard.
      </h3>
      <div className="create-btn-container">
        <button
          className="create-btn"
          onClick={() => props.history.push(`/create_business/${id}`)}
        >
          CREATE BUSINESS
          <i className="fa fa-plus-square-o" aria-hidden="true"></i>
        </button>
        <button
          className="create-btn"
          onClick={() => props.history.push(`/create_event/${id}`)}
        >
          CREATE EVENT{' '}
          <i className="fa fa-plus-square-o" aria-hidden="true"></i>
        </button>
      </div>
      <div className="business_event_container">
        <h2 className="title-h2">Businesses</h2>
        <h2 className="title-h2">Events</h2>
        <div className="user-business">
          {userBusiness ? (
            userBusiness.map((business, i) => (
              <div key={i} className="business-card">
                <BusinessCard business={business} />
                <div className="button-containter">
                  <button
                    className="delete-btn"
                    onClick={() => props.deleteBusiness(business.id)}
                  >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                  <button
                    className="details-btn"
                    onClick={() =>
                      props.history.push(`/business_details/${business.id}`)
                    }
                  >
                    <i className="fa fa-info" aria-hidden="true"></i>
                  </button>
                  <button
                    className="edit-btn"
                    onClick={(id) =>
                      props.history.push(
                        `/update_business/${business.id}/${business.user_id}`
                      )
                    }
                  >
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </button>
                </div>
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
                <div className="button-containter">
                  <button
                    className="delete-btn"
                    onClick={() => props.deleteEvent(event.id)}
                  >
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                  <button
                    className="details-btn"
                    onClick={(id) =>
                      props.history.push(`/event_details/${event.id}`)
                    }
                  >
                    <i className="fa fa-info" aria-hidden="true"></i>
                  </button>
                  <button
                    className="edit-btn"
                    onClick={(id) =>
                      props.history.push(
                        `/update_event/${event.id}/${event.user_id}`
                      )
                    }
                  >
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </button>
                </div>
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
