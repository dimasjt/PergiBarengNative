import { NavigationActions } from "react-navigation";

import {
  NAV_MAIN,
  NAV_LOGIN,
} from "../constants";

import { AppNavigator } from "../AppNavigator";

const firstAction = AppNavigator.router.getActionForPathAndParams("Main");
const initialState = AppNavigator.router.getStateForAction(
  firstAction,
);

function nav(state = initialState, action) {
  let nextState;
  switch (action.type) {
    case NAV_LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

export default nav;
