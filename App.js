import React from 'react';
import { LogBox } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import SplashScreen from './src/screens/SplashScreen';
import AnotherScreen from './src/screens/AnotherScreen';
import HomeScreen from './src/screens/HomeScreen';
import DataScreen from './src/screens/DataScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const mainFlow = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Home Screen'
    })
  },
  Another: {
    screen: AnotherScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Another Screen'
    })
  },
  Data: {
    screen: DataScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Data Screen'
    })
  }
});

const SwitchNavigator = createSwitchNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: ({navigation}) => ({

    })
  },
  main: mainFlow
});

LogBox.ignoreAllLogs();

const App = createAppContainer(SwitchNavigator);

const RenderApp = () => {
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default RenderApp;