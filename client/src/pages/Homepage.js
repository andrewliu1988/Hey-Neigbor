import React from 'react'
import { connect } from 'react-redux'
import { GetAllBusiness } from '../store/actions/BusinessAction'
import BusinessMap from '../components/BusinessMap'
import BusinessSearch from '../components/BusinessSearch'

const mapStateToProps = ({ businessState }) => {
  return { businessState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBusiness: () => dispatch(GetAllBusiness())
  }
}

const Homepage = (props) => {
  return (
    <div>
      <h2>Homepage</h2>
      <BusinessSearch />
      <BusinessMap />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
