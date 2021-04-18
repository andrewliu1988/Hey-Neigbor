import * as React from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {GetAllBusiness} from '../store/actions/BusinessAction'
import {Link} from 'react-router-dom'


const TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN

const mapStateToProps = ({businessState}) => {
	return {businessState}
}

const mapDispatchToProps=(dispatch) => {
	return {
		fetchAllBusiness: () => dispatch(GetAllBusiness())
	}
}

const BusinessMap = (props) => {
	let businesses = props.businessState.allBusiness 

	const  [viewport, setViewPort] = useState({
		width: "100vw", 
		height: "100wh",
		latitude: 40.7128,
		longitude: -74.0060,
		zoom: 10
	})

	useEffect(() => {
		props.fetchAllBusiness()
		//eslint-disable-next-line
	},[])

	return (
		<div>
			<ReactMapGL 
				mapboxApiAccessToken={TOKEN}
				{...viewport}
				width = "100vw" 
				height=  "75vh"
				onViewportChange={setViewPort}
				mapStyle = "mapbox://styles/aliusei125/ckni696d90ajp17o752tg39bv"
			>

				<div className="business-container">
					{businesses ? (
						businesses.map((business, i) => (
						<div key={i}>
							<Link to={(`/business_details/${business.id}`)}>
							
							<Marker
							latitude={parseFloat(business.latitude)} longitude={parseFloat(business.longitude)}
							>
								<img className="map-icon" src='https://i.imgur.com/et0YHzg.png' alt ="map box pin"/> 
							</Marker>
							</Link>
						</div>
						))
					) : (
						<h3>Loading</h3>
					)}	
				</div>
			</ReactMapGL>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps) (BusinessMap)