import Action from '../action/actionTypes'

const initialState = {
    totalMoney: 0
}

const counterReducer = (state = initialState, action ) => {
    switch(action.type) {

        case Action.BUY_CAKE : return {
            totalMoney: state.totalMoney + action.cost
        }

        case Action.BUY_CHOCOLATE : return {
            totalMoney: state.totalMoney + action.cost
        }

        case Action.BUY_ICECREAM : return {
            totalMoney: state.totalMoney + action.cost
        }

        default: return state
    }
}

export default counterReducer 