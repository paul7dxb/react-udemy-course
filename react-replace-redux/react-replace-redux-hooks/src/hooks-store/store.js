import { useEffect, useState } from "react";

// Values exist outside of hook so will be the same to all components that import the file
let globalState = {};
let listeners = [];
let actions = {};

// Should Listen used to optimise listeners (if a component is only being used to dispatch functions)
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

  // Get action based off of a passed in identifier found in actions
  const dispatch = (actionIdentifier, payload) => {
    // call action method using brackets. Get new state based on globalState
    const newState = actions[actionIdentifier](globalState, payload);
    // Merge globalState with newState
    globalState = { ...globalState, ...newState };

    // Update react state with new global sate so rerender components using the hook
    for (const listener of listeners) {
      listener(globalState);
    }
  };

  // Add component to listeners when it mounts
  useEffect(() => {
    if (shouldListen) {
      listeners.push(setState);
    }

    // Remove when unmounts
    return () => {
      if (shouldListen) {
        listeners = listeners.filter((li) => li !== setState);
      }
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
  if (initialState) {
    // global state is shared so need to keep current state
    globalState = { ...globalState, ...initialState };

    actions = { ...actions, ...userActions };
  }
};
