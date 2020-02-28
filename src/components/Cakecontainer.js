import React from 'react'
import { connect } from 'react-redux'
import { buycake } from '../redux/index'
import { addcake } from '../redux/index'
import { buyicecream } from '../redux/index'
import { addicecream } from '../redux/index'

function Cakecontainer(props) {
    return (
        <div>
            <h1>CAKE AND ICECREAM SHOP</h1>
            <div>
                <h2>Number of cakes :{props.numOfCakes}</h2>
                <button onClick={props.buycake}>Buy cake</button>
                <button onClick={props.addcake}>Add cake</button>
            </div>
            <div>
                <h2>Number of icecream :{props.numOfIcecream}</h2>
                <button onClick={props.buyicecream}>Buy icecream</button>
                <button onClick={props.addicecream}>Add icecream</button>
            </div>
        </div>

    )
}
const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes,
        numOfIcecream: state.numOfIcecreams
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buycake: () => dispatch(buycake()),
        addcake: () => dispatch(addcake()),
        buyicecream: () => dispatch(buyicecream()),
        addicecream: () => dispatch(addicecream()),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (Cakecontainer)

