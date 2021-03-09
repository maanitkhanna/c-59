import * as React from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';

export default class NewsScreen extends React.Component{
  render(){
  return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Breaking News</Text>
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
  