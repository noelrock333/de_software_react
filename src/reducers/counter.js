export const initialState = {
  counter: 0,
  name: '',
  age: 0,
  apiData: null,
}

function reducer(state = initialState , action) {
  switch (action.type) {
    case 'increment': {
      return {
        ...state,
        counter: state.counter + 1
      }
    }
    case 'decrement': {
      return {
        ...state,
        counter: state.counter - 1
      }
    }
    case 'set_counter': {
      return {
        ...state,
        counter: Number(action.payload),
      }
    }
    default: return state;
  }
}

export default reducer;
