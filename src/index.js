import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { counter, initialState } from "./reducer";
import "./styles.css";

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
