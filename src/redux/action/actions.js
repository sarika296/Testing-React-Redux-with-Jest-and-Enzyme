import Action from "./actionTypes"

export const buyCake = (quantity) => {
    return {
        type: Action.BUY_CAKE,
        cost: (quantity == undefined || null || NaN) ? 0 :  quantity * 500,
        payload: (quantity == undefined || null || NaN) ? 0 : quantity
    }
}


export const buyChocolate = (quantity) => {
    return {
        type: Action.BUY_CHOCOLATE,
        payload: (quantity == undefined || null || NaN) ? 0 : quantity,
        cost: (quantity == undefined || null || NaN) ? 0 :  quantity * 100
    }
}

export const buyIceCream = (quantity) => {
    return {
        type: Action.BUY_ICECREAM,
        payload: (quantity == undefined || null || NaN) ? 0 : quantity,
        cost: (quantity == undefined || null || NaN) ? 0 :  quantity * 200
    }
}