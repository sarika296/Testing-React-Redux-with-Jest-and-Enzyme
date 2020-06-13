import Reducer from "./Reducer"
import Action from '../action/actionTypes'

const cakeInitialState = {
    numOfCakes: 10,
    totalMoney: 0
}

describe("Reducers Testing", () => {
    
    it('should create a reducer of BUY_CAKE', () => {

        const payload = 10
        const cost = 500 * payload
        const expectedState = { numOfCakes: 0, totalMoney: cost }
        const newState = Reducer(cakeInitialState,  { type: Action.BUY_CAKE, payload, cost } )
        expect(newState).toEqual(expectedState)
    });

})