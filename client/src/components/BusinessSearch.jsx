import React from 'react'
import { connect } from 'react-redux'
import {GetBusinessByZipcode, BusinessSearchInput} from '../store/actions/BusinessAction'


const mapStateToProps=({businessState} ) => {
  return {
    businessState
  }
}

const mapDispatchToProps=(dispatch) => {
  return {
    searchInput: (input) => dispatch(BusinessSearchInput(input)),
    fetchBusinessByZipCode: (zipcode) => dispatch(GetBusinessByZipcode(zipcode))
  }
}


const BusinessSearch = (props) => {

  const handleChange= (e) => {
    props.searchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.fetchBusinessByZipCode(props.businessState.search)
 }

  return (
    <div >
      <form className="search-bar">
        <h3 className='zipcode'>Search by Zipcode: </h3>
        <input
        type='type'
        name='search'
        value={props.businessState.search}
        onChange={handleChange}
        className="input-field"/>
        <button
        className="search-btn"
         type="button" onClick={handleSubmit}>Search Zipcode <i className="fa fa-search" aria-hidden="true"></i></button>
      </form>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(BusinessSearch)