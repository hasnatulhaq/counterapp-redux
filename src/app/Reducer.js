

const initialState = {
    keyvalue : 0,
}


export default  function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'increment') {
      // If so, make a copy of `state`
      return {
        
        // and update the copy with the new value
       keyvalue: state.keyvalue + 1 
      }
    }
    // otherwise return the existing state unchanged
    return state
  }


// const initialState = { value: 0 }

// export const customReducer=createReducer(initialState, action) {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, value: state.value + 1 }
//     case 'decrement':
//       return { ...state, value: state.value - 1 }
//     default:
//       return state
//   }
// }
