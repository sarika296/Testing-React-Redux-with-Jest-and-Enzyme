import Action from '../action/actionTypes'

const initialState = {
    numOfChocolates: 30
}

const chocolateReducer = (state = initialState, action ) => {
    switch(action.type) {
        case Action.BUY_CHOCOLATE : return {
            ...state,
            numOfChocolates: state.numOfChocolates - action.payload
        }

        default: return state
    }
}
 
export default chocolateReducer 