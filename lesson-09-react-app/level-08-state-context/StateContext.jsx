import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const STATE_CONTEXT_LIST = Symbol.for("STATE_CONTEXT_LIST");
window[STATE_CONTEXT_LIST] = [];

export function StateContext({ children, initialState }) {
  if (!initialState)
    throw new Error(
      "initialState must be a Map object - example: new Map() - that declares all states for child components.",
    );

  const [didMount, setDidMount] = useState();
  const [Context, setContext] = useState();
  const [state, updateState] = useReducer(reducer, initialState);
  useEffect(componentDidMount, []);

  let component = <></>;
  if (didMount)
    component = <Context value={[state, updateState]}>{children}</Context>;

  return <>{component}</>;

  //////////////////////////////////////////////////////////////////

  function componentDidMount() {
    const Context = createContext();
    window[STATE_CONTEXT_LIST].push(Context);

    setDidMount(true);
    setContext(Context);
  }
}

function reducer(state, action) {
  const newState = new Map(state);
  return newState;
}
