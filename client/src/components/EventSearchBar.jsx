import React from 'react'
import { connect } from 'react-redux'
import {GetEventsByZipcode, EventSearchInput} from '../store/actions/EventAction'


const mapStateToProps=({eventState} ) => {
  return {
    eventState
  }
}

const mapDispatchToProps=(dispatch) => {
  return {
    searchInput: (input) => dispatch(EventSearchInput(input)),
    fetchEventByZipCode: (zipcode) => dispatch(GetEventsByZipcode(zipcode))
  }
}


const EventSearchBar = (props) => {

  const handleChange= (e) => {
    props.searchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.fetchEventByZipCode(props.eventState.eventSearch)
  }

  return (
    <div>
      <form>
        <input
        type='type'
        name='eventSearch'
        value={props.eventState.eventSearch}
        onChange={handleChange}/>
        <button type="button" onClick={handleSubmit}>Search Zipcode</button>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(EventSearchBar)