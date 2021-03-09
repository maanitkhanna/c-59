import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import axios from 'axios';

export default class WeatherScreen extends React.Component{
  constructor(){
    super();
    this.state={
      weather:'',
    };
  }
  getWeather=()=>{
    URL=" https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139"
  }
  componentDidMount=()=>{
    this.getWeather();
  };
  render(){
  return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Weather</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'blue',
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
  