import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {GetBusinessDetails} from '../store/actions/BusinessAction'


const mapStateToProps = ({businessState} ) => {
    return {businessState}
	}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchBusinessDetails: (id) => dispatch(GetBusinessDetails(id))
	}
}

const BusinessDetails = (props) => {
    const businessDetails = props.businessState.businessDetails
    const id = props.match.params.id

    
    useEffect(() => {
		props.fetchBusinessDetails(id)
			//eslint-disable-next-line
    }, [])

    return (
		<div className='business-details'> 
			<h1>Details</h1>
			<h2> {businessDetails.name}</h2>
			<h3>Grand Opening: {businessDetails.date}</h3> 
			<img width="500em" src={businessDetails.image} alt="business cover"/>
			<h3>{businessDetails.address} {businessDetails.zipcode} </h3>
			<a href={businessDetails.website}>{businessDetails.website}</a>
			<p>{businessDetails.description}</p>
		</div>
    )
  }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails)