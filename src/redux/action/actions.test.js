import * as actions from "./actions"
import Action from './actionTypes'

describe("Actions Testing", () => {
    
    it(`should create an action as ${Action.BUY_CAKE}`, () => {
        const quantity = 1
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

    it(`should create an action as ${Action.BUY_ICECREAM}`, () => {
        const quantity = 2
        const qnt = quantity > 20 ? 0 : quantity 
        const payload = qnt
        const cost = qnt * 200
        const expectedAction = {
            type: Action.BUY_ICECREAM,
            payload,
            cost
        }
        expect(actions.buyIceCream(qnt)).toEqual(expectedAction)
    });

    it(`should create an action as ${Action.BUY_CHOCOLATE}`, () => {
        const quantity = 2
        const qnt = quantity > 30 ? 0 : quantity 
        const payload = qnt
        const cost = qnt * 100
        const expectedAction = {
            type: Action.BUY_CHOCOLATE,
            payload,
            cost
        }
        expect(actions.buyChocolate(qnt)).toEqual(expectedAction)
    });

})