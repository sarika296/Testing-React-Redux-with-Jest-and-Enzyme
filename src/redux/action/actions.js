import Action from "./actionTypes"

export const buyCake = (quantity) => {
    return {
        type: Action.BUY_CAKE,
        payload: (quantity===0) ? 0 : quantity,
        cost: (quantity!==0) ?  quantity * 500 : 0 
    }
}


export const buyChocolate = (quantity) => {
    return {
        type: Action.BUY_CHOCOLATE,
        payload: quantity===0 ? 0 : quantity,
        cost: quantity!==0 ? quantity * 100 : 0
    }
}

export const buyIceCream = (quantity) => {
    return {
        type: Action.BUY_ICECREAM,
        payload: quantity===0 ? 0 : quantity,
        cost: quantity!==0 ? quantity * 200 : 0
    }
}