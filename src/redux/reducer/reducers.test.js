import Reducer from "./Reducer"
import Action from '../action/actionTypes'

const cakeInitialState = {
    numOfCakes: 10,
    totalMoney: 0
}

const iceCreamInitialState = {
    numOfIceCreams: 20,
    totalMoney: 0
}

const chocolateInitialState = {
    numOfChocolates: 30,
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

    it('should create a reducer of BUY_ICECREAM', () => {

        const payload = 10
        const cost = 200 * payload
        const expectedState = { numOfIceCreams: 10, totalMoney: cost }
        const newState = Reducer(iceCreamInitialState,  { type: Action.BUY_ICECREAM, payload, cost } )
        expect(newState).toEqual(expectedState)
    });

    it('should create a reducer of BUY_CHOCOLATE', () => {

        const payload = 10
        const cost = 100 * payload
        const expectedState = { numOfChocolates: 20, totalMoney: cost }
        const newState = Reducer(chocolateInitialState,  { type: Action.BUY_CHOCOLATE, payload, cost } )
        expect(newState).toEqual(expectedState)
    });

})