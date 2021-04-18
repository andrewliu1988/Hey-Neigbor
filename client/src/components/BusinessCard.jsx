import React from 'react'
import '../style/UserProfile.css'

const BusinessCard = (props) => {
  const {name, date, address, description} = props.business
  return (
    <div className="card-details"> 
      <h4>{name}</h4>
      <p> Date: {date}</p>
      <p>Address: {address}</p>
      <p>{description}</p> 
    </div> 
    )
  
}

export default BusinessCard