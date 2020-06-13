import Reducer from "./Reducer"
import Action from '../action/actionTypes'

const cakeInitialState = {
    numOfCakes: 10,
    totalMoney: 0
}

describe("Reducers Testing", () => {
    
    it('should create a reducer of BUY_CAKE', () => {

        const expectedState = { numOfCakes: 0, totalMoney: 5000}

        const newState = Reducer(cakeInitialState,  { type: Action.BUY_CAKE, payload: 10 , cost: 5000 } )

        expect(newState).toEqual(expectedState)
    });

})