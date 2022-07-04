import { View, Text } from 'react-native'
import React from 'react'
import Navigation from './Components/Navigation'
import Proof from './Components/Proof'
import { Provider } from 'react-redux';
import { store } from './Redux/state';
import {LogBox} from "react-native";

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])
export default function App() {
  return (
    <Provider store={store}>
  <Navigation />
    </Provider>

  

  )
}