import Action from '../action/actionTypes'
 
export const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action ) => {
    switch(action.type) {
        case Action.BUY_CAKE : return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload
        }

        default: return state
    }
}

export default cakeReducer 