const initialState = () => ({
  count: 0,
})

const reducer = (state = initialState(), action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        //...state, <-- only if we have more date.
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        //...state, <-- only if we have more date.
        count: state.count - 1
      };
    default:
      return state;
  }
}

const counterReducer = {
  reducer: reducer,
  initialState: initialState
}

export default counterReducer;