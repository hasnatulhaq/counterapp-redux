import {useDispatch,useSelector} from 'react-redux'


function Counter(){
    const dispatch = useDispatch();
    const {keyvalue} = useSelector(state => state.custom);

    const inc = () =>{
          dispatch({
            type : "increment",
          })
    }
    
    const dec = () =>{
        dispatch({
           type: "decrement",
        })
       }

    return(
        <>
        <h2>{keyvalue}</h2>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        </>
    )
}


export default Counter