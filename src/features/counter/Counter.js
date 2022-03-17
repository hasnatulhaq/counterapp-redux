import {useDispatch,useSelector} from 'react-redux'
import {increment, decrement} from '../../app/reducerSlice'

function Counter(){
    const dispatch = useDispatch();
    const {value} = useSelector(state => state.counter);

    return(
        <>
        <h2>{value}</h2>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        </>
    )
}


export default Counter





