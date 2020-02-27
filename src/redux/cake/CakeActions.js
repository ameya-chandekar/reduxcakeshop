import {BUY_CAKE} from'./caketypes'
import {ADD_CAKE} from'./caketypes'
import {BUY_ICECREAM} from './caketypes'
import {ADD_ICECREAM} from './caketypes'

export const buycake=()=>{
    return{
        type:BUY_CAKE
    }
}
export const addcake=()=>{
    return{
        type:ADD_CAKE
    }
}
export const buyicecream=()=>{
    return{
        type:BUY_ICECREAM
    }
}
export const addicecream=()=>{
    return{
        type:ADD_ICECREAM
    }
}