import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
//import { Provider } from "react-redux";
import "./styles.css";
const initialState = {
  index: 0,
  value: 0
};
const counter = (state = initialState, action) => {
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
const store = createStore(counter);

const ReactSample = ({
  value = initialState,
  onIncrement,
  onIncrementIndex,
  onDecrement,
  onDecrementIndex
}) => (
  <div>
    <h1>value : {value.value}</h1>
    <h1>index : {value.index}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    <br />
    <button onClick={onIncrementIndex}>+Index</button>
    <button onClick={onDecrementIndex}>-Index</button>
  </div>
);

const rootElement = document.getElementById("root");
const render = () => {
  ReactDOM.render(
    <ReactSample
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      onIncrementIndex={() => store.dispatch({ type: "INCREMENTINDEX" })}
      onDecrementIndex={() => store.dispatch({ type: "DECREMENTINDEX" })}
    />,
    rootElement
  );
};
store.subscribe(render);
render();
