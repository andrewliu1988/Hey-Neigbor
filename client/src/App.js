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

function App() {
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
            path="/update/:id/:user_id"
            component={UpdateBusinessForm}
          />
        </Switch>
      </main>
    </div>
  )
}

export default App
