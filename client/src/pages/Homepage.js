import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetAllBusiness } from '../store/actions/BusinessAction'
import BusinessCard from '../components/BusinessCard'

const mapStateToProps = ({ businessState }) => {
  return { businessState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBusiness: () => dispatch(GetAllBusiness())
  }
}

const Homepage = (props) => {
  useEffect(() => {
    props.fetchAllBusiness()
  }, [])

  let businesses = props.businessState.allBusiness

  return (
    <div>
      <h2>Homepage</h2>
      <div className="business-container">
        {businesses.length ? (
          businesses.map((business, i) => (
            <BusinessCard key={i} business={business} />
          ))
        ) : (
          <h3>Loading</h3>
        )}
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
