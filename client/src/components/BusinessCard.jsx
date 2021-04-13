import React from 'react'

const BusinessCard = (props) => {
  const {name, date, address, description} = props.business
  return (
    <div> 
      <h4>{name}</h4>
      <p>{date}</p>
      <p>{address}</p>
      <p>{description}</p> 
    </div> 
    )
  
}

export default BusinessCard