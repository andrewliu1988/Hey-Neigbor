import './style/App.css'
import { Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'

function App() {
  return (
    <div>
      <h1>Hey Neighbor!!!</h1>
      <main>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </main>
    </div>
  )
}

export default App
