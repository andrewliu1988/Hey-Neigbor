import React from 'react'

const EventCard =(props) => {
  const {name, address, date, zipcode, attendees} = props.event
  return (
    <div> 
      <h4>{name} </h4>
      <p>{address}</p>
      <p>{date}</p>
      <p>{zipcode}</p>
      <p>{attendees}</p>
    </div>
  )
}

export default EventCard