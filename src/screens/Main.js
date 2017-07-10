import React from "react"
import { View, Text, Button } from "react-native"

import {
  NAV_LOGIN,
} from "../constants"

export default class Main extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>Main</Text>
        <Button title="login" onPress={() => navigation.dispatch({ type: NAV_LOGIN })} />
      </View>
    )
  }
}
