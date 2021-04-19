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
      <form className="search-bar">
      <h3 className='zipcode'>Search by Zipcode: </h3>
        <input
        type='type'
        name='eventSearch'
        value={props.eventState.eventSearch}
        onChange={handleChange}
        className='input-field'/>
        <button 
        className="search-btn"
        type="button" onClick={handleSubmit}>Search Zipcode <i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(EventSearchBar)