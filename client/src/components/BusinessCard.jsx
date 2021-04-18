import React from 'react'
import '../style/UserProfile.css'

const BusinessCard = (props) => {
  const {name, date, zipcode,  address, description} = props.business
  return (
    <div > 
      <h4>{name}</h4>
      <p>{date}</p>
      <p>{address}</p>
      <p>{zipcode} </p> 
      <p>{description}</p> 
    </div> 
    )
  
}

export default BusinessCard