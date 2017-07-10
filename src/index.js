import React from "react"
import { Provider } from "react-redux"

import AppWithNavigationState from "./AppNavigator"

import store from "./store"

export default () => {
  return (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  )
}
