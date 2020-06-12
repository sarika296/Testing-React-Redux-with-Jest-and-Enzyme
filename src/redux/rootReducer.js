import { combineReducers } from 'redux'
import cakeReducer from './reducer/cakeReducer'
import iceCreamReducer from './reducer/iceCreamReducer'
import chocolateReducer from './reducer/chocolateReducer'
import counterReducer from './reducer/counterReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    chocolate: chocolateReducer,
    counter: counterReducer
})

export default rootReducer