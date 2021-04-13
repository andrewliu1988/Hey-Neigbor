import React from 'react'
import { connect } from 'react-redux'
import { GetAllBusiness } from '../store/actions/BusinessAction'

const mapStateToProps = ({ businessState }) => {
  return { businessState }
}

const mapDispatchToProps = ({ dispatch }) => {
  return {
    fetchAllBusiness: () => dispatch(GetAllBusiness())
  }
}

const Homepage = () => {
  return (
    <div>
      <h2>Homepage</h2>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
