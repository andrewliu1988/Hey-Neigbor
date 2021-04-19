import React from 'react'
import BusinessMap from '../components/BusinessMap'
import BusinessSearch from '../components/BusinessSearch'

const Homepage = (props) => {
  return (
    <div>
      <div className="search-bar">
        <BusinessSearch />
      </div>
      <div className="map-container">
        <BusinessMap />
      </div>
    </div>
  )
}

export default Homepage
