import { useCallback } from "react";
import "./App.css";
// import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "./action/actions";
import { useSelector, useDispatch } from "react-redux";
import Home from "./components/Home";

function App(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state?.counter?.count);
  const name = useSelector((state) => state?.counter?.name);
  // event handler
  const handleCount = useCallback(
    (state) => {
      // dispatch action
      // props.increaseCounter();

      if (state === "increase") return dispatch(increaseCounter());
      else if (state === "decrease") return dispatch(decreaseCounter());
    },
    [dispatch]
  );

  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>Hello {name}</h1>
        <div>Count: {count}</div>

        <button onClick={() => handleCount("increase")}>Increase Count</button>

        <button onClick={() => handleCount("decrease")}>Decrease Count</button>
      </header> */}
      <Home></Home>
      {/* <h1>Hello {name}</h1>
      <div>Count: {count}</div>

      <button onClick={() => handleCount("increase")}>Increase Count</button>

      <button onClick={() => handleCount("decrease")}>Decrease Count</button> */}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     count: state.counter.count,
//     name: state.counter.name,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increaseCounter: () => dispatch(increaseCounter()),
//     decreaseCounter: () => dispatch(decreaseCounter()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
