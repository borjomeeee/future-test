import { useReducer } from "react";

function useReducerWithThunk<T, U>(
  reducer: (store: T, action: U) => T,
  initialState: T
) {
  const [state, dispatch] = useReducer(reducer, initialState);
  let customDispatch = (action: U) => {
    if (typeof action === "function") {
      action(customDispatch);
    } else {
      dispatch(action);
    }
  };
  return [state, customDispatch];
}

export default useReducerWithThunk;
