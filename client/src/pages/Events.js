import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetAllEvent } from '../store/actions/EventAction'
import EventCard from '../components/EventCard'
import EventMap from '../components/EventMapBox'

const mapStateToProps = ({ eventState }) => {
  return { eventState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllEvent: () => dispatch(GetAllEvent())
  }
}

const Events = (props) => {
  // useEffect(() => {
  //   props.fetchAllEvent()
  //   //eslint-disable-next-line
  // }, [])

  // let events = props.eventState.allEvent

  return (
    <div>
      <h1>Events</h1>
      {/* <div className="event-container">
        {events.length ? (
          events.map((event, i) => (
            <div
              onClick={() => props.history.push(`/event_details/${event.id}`)}
              key={i}
            >
              <EventCard event={event} />
            </div>
          ))
        ) : (
          <h3>Loading </h3>
        )}
      </div> */}

      <EventMap />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)
