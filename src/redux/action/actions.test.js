import * as actions from "./actions"
import Action from './actionTypes'

describe("Actions Testing", () => {
    it(`should create an action as ${Action.BUY_CAKE}`, () => {
        const quantity = 11
        const qnt = quantity > 10 ? 0 : quantity 
        const payload = qnt
        const cost = qnt * 500
        const expectedAction = {
            type: Action.BUY_CAKE,
            payload,
            cost
        }
        expect(actions.buyCake(qnt)).toEqual(expectedAction)
    });
})