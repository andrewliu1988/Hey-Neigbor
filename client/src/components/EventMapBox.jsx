import * as React from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {GetAllEvent} from '../store/actions/EventAction'
import {Link} from 'react-router-dom'

const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const mapStateToProps =({eventState} ) => {
  return {eventState}
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllEvent: ()=> dispatch(GetAllEvent()) 
  }
}


const EventMap = (props) => {
  let events = props.eventState.allEvent
  useEffect(()=> {
    props.fetchAllEvent()
  }, [])

  const  [viewport, setViewPort] = useState({
    width: "100vw", 
    height: "100wh",
    latitude: 40.7128,
    longitude: -74.0060,
    zoom:12
  })


  return (
    <div> 
      <ReactMapGL
      mapboxApiAccessToken={TOKEN}
      {...viewport}
      width = "75vw" 
      height=  "75vh"
      onViewportChange={setViewPort}
      mapStyle = "mapbox://styles/aliusei125/ckni696d90ajp17o752tg39bv"
      > 
      
      <div className="event-container">
        {events ? events.map((event, i) => (
          <div key={i}>
            <Link to={(`/event_details/${event.id}`)}>
              <Marker
              latitude={parseFloat(event.latitude)} longitude={parseFloat(event.longitude)}
              >
                <img className="map-icon" src='https://i.imgur.com/jB84JLZ.png'/> 
                {/* <button>{event.name}</button> */}
              </Marker>
            </Link>
          </div>
        )): 
        <h3>Loading</h3>
        }
      </div>

      </ReactMapGL>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(EventMap)