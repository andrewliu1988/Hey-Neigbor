import './style/App.css'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Events from './pages/Events'
import Nav from './components/Nav'
import BusinessDetails from './components/BusinessDetails'
import EventDetails from './components/EventDetails'
import UserProfile from './pages/UserProfile'
import CreateBusinessForm from './components/CreateBusinessForm'
import CreateEventForm from './components/CreateEventForm'
import UpdateBusinessForm from './components/UpdateBusinessForm'
import UpdateEventForm from './components/UpdateEventForm'
import RegisterForm from './components/RegisterForm'
import Login from './components/Login'
import { CheckSession } from './store/actions/AuthAction'
import { connect } from 'react-redux'
import React, { useEffect } from 'react'

const mapStateToProps = ({ authState }) => {
  return { authState }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkSession: (token) => dispatch(CheckSession(token))
  }
}

function App(props) {
  useEffect(() => {
    const token = localStorage.getItem('token')
    props.checkSession(token)
  }, [props.authState.current_user])

  return (
    <div>
      <Nav />
      <h1>Hey Neighbor!!!</h1>
      <main>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/events" component={Events} />
          <Route
            exact
            path="/business_details/:id"
            component={BusinessDetails}
          />
          <Route exact path="/event_details/:id" component={EventDetails} />
          <Route exact path="/user_profile/:id" component={UserProfile} />
          <Route
            exact
            path="/create_business/:id"
            component={CreateBusinessForm}
          />
          <Route exact path="/create_event/:id" component={CreateEventForm} />
          <Route
            exact
            path="/update_business/:id/:user_id"
            component={UpdateBusinessForm}
          />
          <Route
            exact
            path="/update_event/:id/:user_id"
            component={UpdateEventForm}
          />
          <Route path="/register" component={RegisterForm} />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
