import "./App.css";
// import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "./action/actions";

import { useSelector, useDispatch } from "react-redux";

function App(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state?.counter?.count);
  const name = useSelector((state) => state?.counter?.name);
  // event handler
  const handleIncrease = () => {
    // dispatch action
    // props.increaseCounter();

    dispatch(increaseCounter());
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {name}</h1>
        <div>Count: {count}</div>

        <button onClick={handleIncrease}>Increase Count</button>

        <button onClick={() => dispatch(decreaseCounter())}>
          Decrease Count
        </button>
      </header>
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
