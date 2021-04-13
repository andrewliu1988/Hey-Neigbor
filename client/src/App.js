import './style/App.css'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Events from './pages/Events'
import Nav from './components/Nav'

function App() {
  return (
    <div>
      <Nav />
      <h1>Hey Neighbor!!!</h1>
      <main>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/events" component={Events} />
        </Switch>
      </main>
    </div>
  )
}

export default App
