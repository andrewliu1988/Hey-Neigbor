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
		<div> 
			<div className='business-details'>
				<img width="500em" src={businessDetails.image} alt="business cover"/>
				<section className="details">
					<h2 className="h2-details"> {businessDetails.name}</h2>
					<h3 className="h3-details">Grand Opening: {businessDetails.date}</h3> 
					<h3 className="h3-details"> Address:  {businessDetails.address} </h3>
					<a className='h3-details' href={businessDetails.website}>{businessDetails.name} Website</a>
					<h3 className="h3-details"> Description: </h3>
					<p className="description">{businessDetails.description}</p>
				</section>
			</div>
		</div>
    )
  }

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails)