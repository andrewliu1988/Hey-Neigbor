import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetAllEvent } from '../store/actions/EventAction'
import EventCard from '../components/EventCard'

const mapStateToProps = ({ eventState }) => {
  return { eventState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllEvent: () => dispatch(GetAllEvent())
  }
}

const Events = (props) => {
  useEffect(() => {
    props.fetchAllEvent()
    //eslint-disable-next-line
  }, [])

  let events = props.eventState.allEvent

  return (
    <div>
      <h1>Events</h1>
      <div className="event-container">
        {events.length ? (
          events.map((event, i) => <EventCard key={i} event={event} />)
        ) : (
          <h3>Loading </h3>
        )}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)
