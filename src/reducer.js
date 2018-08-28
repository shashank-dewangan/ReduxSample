export const initialState = {
  index: 0,
  value: 0
};
export const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + 1 };
    case "DECREMENT":
      return { ...state, value: state.value - 1 };
    case "INCREMENTINDEX":
      return { ...state, index: state.index + 1 };
    case "DECREMENTINDEX":
      return { ...state, index: state.index - 1 };
    default:
      return state;
  }
};
