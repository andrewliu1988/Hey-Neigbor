import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetAllBusiness } from '../store/actions/BusinessAction'
// import BusinessCard from '../components/BusinessCard'
import BusinessMap from '../components/BusinessMap'

const mapStateToProps = ({ businessState }) => {
  return { businessState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllBusiness: () => dispatch(GetAllBusiness())
  }
}

const Homepage = (props) => {
  // useEffect(() => {
  //   props.fetchAllBusiness()
  //   //eslint-disable-next-line
  // }, [])

  // let businesses = props.businessState.allBusiness

  return (
    <div>
      <h2>Homepage</h2>
      {/* <div className="business-container">
        {businesses.length ? (
          businesses.map((business, i) => (
            <div
              onClick={() =>
                props.history.push(`/business_details/${business.id}`)
              }
              key={i}
            >
              <BusinessCard business={business} />
            </div>
          ))
        ) : (
          <h3>Loading</h3>
        )}
      </div> */}
      <BusinessMap />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
