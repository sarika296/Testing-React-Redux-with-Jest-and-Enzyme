import * as actions from "./actions"
import Action from './actionTypes'

describe("Actions Testing", () => {
    it(`should create an action as ${Action.BUY_CAKE}`, () => {
        const quantity = 1
        const cost = 500
        const payload = 1
        const expectedAction = {
            type: Action.BUY_CAKE,
            payload,
            cost
        }
        expect(actions.buyCake(quantity)).toEqual(expectedAction)
    });
})