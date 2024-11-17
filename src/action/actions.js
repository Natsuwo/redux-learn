import { INCREMENT, DECREMENT } from "./types";

export const increaseCounter = () => {
  return {
    type: INCREMENT,
    payload: { like: "Buy" },
  };
};

export const decreaseCounter = () => {
  return {
    type: DECREMENT,
  };
};
