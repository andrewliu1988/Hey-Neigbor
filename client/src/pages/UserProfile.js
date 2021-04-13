import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetUserBAndE } from '../store/actions/UserAction'

const mapStateToProps = ({ userState }) => {
  return { userState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinessAndEvent: (id) => dispatch(GetUserBAndE(id))
  }
}

const UserProfile = (props) => {
  let id = 1

  useEffect(() => {
    props.fetchBusinessAndEvent(id)
  }, [])

  return (
    <div>
      <h1>User Profile</h1>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
