import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducer from './reducer/Reducer'
import logger from 'redux-logger'

const store= createStore(Reducer, composeWithDevTools(applyMiddleware(logger, thunk)) )

export default store 