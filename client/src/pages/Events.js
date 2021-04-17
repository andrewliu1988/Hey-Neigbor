import React from 'react'
import { connect } from 'react-redux'
import { GetAllEvent } from '../store/actions/EventAction'

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
  return (
    <div>
      <h1>Events</h1>
      <EventMap />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)
