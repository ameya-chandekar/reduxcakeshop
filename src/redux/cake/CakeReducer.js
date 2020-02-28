import {BUY_CAKE, ADD_CAKE, BUY_ICECREAM, ADD_ICECREAM} from './caketypes'

const initialstate = {
    numOfCakes: 10,
    numOfIcecreams: 20
}

const cakeReducer = (state = initialstate, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case ADD_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes + 1
            }
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams - 1
            }
        case ADD_ICECREAM:
            return {
                ...state,
                numOfIcecreams: state.numOfIcecreams + 1
            }
        default:
            return state
    }

}
export default cakeReducer
