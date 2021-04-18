import React from 'react'

const EventCard =(props) => {
  const {name, address, date, description, attendees} = props.event
  return (
    <div className="card-details"> 
      <h4>{name} </h4>
      <p>Date: {date}</p>
      <p>Address: {address}</p>
      <p>{description}</p>
      <p>Attendees: {attendees}</p>
    </div>
  )
}

export default EventCard