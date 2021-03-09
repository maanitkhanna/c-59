import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation'; 
import JokeScreen from './screens/JokeScreen';
import HoroScopeScreen from './screens/HoroScopeScreen';
import WeatherScreen from './screens/WeatherScreen';
import NewsScreen from './screens/NewsScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/ >
      </View>
    );
  }
}


var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  JokeScreen:JokeScreen,
  HoroScopeScreen:HoroScopeScreen,
  WeatherScreen:WeatherScreen,
  NewsScreen:NewsScreen
})

const AppContainer = createAppContainer(AppNavigator)
