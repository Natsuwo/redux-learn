import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement } from "./redux/slices/counterSlice";
import Home from "./components/Home";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <Home></Home>
      <div className="btn-class">
        <button
          className="btn btn-success"
          onClick={() => dispatch(increment())}
        >
          Increase
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch(decrement())}
        >
          Decrease
        </button>
      </div>
      <br />
      <div>Count = {count}</div>
    </div>
  );
}

export default App;
