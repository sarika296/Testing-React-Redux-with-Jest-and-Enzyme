import Action from '../action/actionTypes'
 
export const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20,
    numOfChocolates: 30,
    totalMoney: 0
}

const Reducer = (state = initialState, action ) => {
    switch(action.type) {
        case Action.BUY_CAKE : return {
            ...state,
            numOfCakes: state.numOfCakes - action.payload,
            totalMoney: state.totalMoney + action.cost
        }

        case Action.BUY_CHOCOLATE : return {
            ...state,
            numOfChocolates: state.numOfChocolates - action.payload,
            totalMoney: state.totalMoney + action.cost
        }

        case Action.BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - action.payload,
            totalMoney: state.totalMoney + action.cost
        }

        default: return state
    }
}

export default Reducer 