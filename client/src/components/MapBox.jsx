import * as React from 'react'
import ReactMapGL from 'react-map-gl'
import {useState} from 'react'

const mapStateToProps = ({}) => {
  return {}
}

const mapDispatchToProps=(dispatch) => {
  return {

  }
}

const Map = (props) => {
  const  [viewport, setViewPort] = useState({
    width: 400, 
    height: 400, 
    latitude: 40.7128,
    longitude: 74.0060,
    zoom: 8
  })


  return (
    <ReactMapGL 
    {...viewport}/>
  )
}

export default Map