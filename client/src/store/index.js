import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import UserReducer from './reducers/UserReducer'
import BusinessReducer from './reducers/BusinessReducer'
import EventReducer from './reducers/EventReducer'

const store = createStore(
  combineReducers({
    businessState: BusinessReducer,
    eventState: EventReducer,
    userState: UserReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
