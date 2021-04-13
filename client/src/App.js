import './style/App.css'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Events from './pages/Events'
import Nav from './components/Nav'
import BusinessDetails from './components/BusinessDetails'
import EventDetails from './components/EventDetails'

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
        </Switch>
      </main>
    </div>
  )
}

export default App
