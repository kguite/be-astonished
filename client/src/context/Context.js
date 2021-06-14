import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

// https://www.freecodecamp.org/news/state-management-with-react-hooks/
// https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/#whatiscontext
// https://kentcdodds.com/blog/how-to-use-react-context-effectively

// if there is user inside local storage, or not
// isFetching: https://medium.com/@killerchip0/handling-asynchronous-fetching-of-data-with-react-redux-2aecc65e87af
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{ 
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};