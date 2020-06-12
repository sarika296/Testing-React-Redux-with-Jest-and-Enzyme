import Action from '../action/actionTypes'

const initialState = {
    numOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case Action.BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload
        }

        default: return state
    }
}

export default iceCreamReducer