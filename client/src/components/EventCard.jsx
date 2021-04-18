import React from 'react'

const EventCard =(props) => {
  const {name, address, date, description, attendees} = props.event
  return (
    <div> 
      <h4>{name} </h4>
      <p>{address}</p>
      <p>{description}</p>
      <p>{date}</p>
      <p>{attendees}</p>
    </div>
  )
}

export default EventCard