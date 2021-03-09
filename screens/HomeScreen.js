import * as React from 'react';
import { Text, View, StyleSheet ,TouchableOpacity,Image} from 'react-native';
import AppHeader from '../components/AppHeader'
import db from '../config';

export default class HomeScreen extends React.Component{
  constructor(){
    super()
    this.state={
      like:0,
      dislike:0
    }   
  }
  likecount=()=>{
   this.setState({like:this.state.like+1})
   var like=db.ref('Rating/'+'/')
   like.update({
      'likePressed':this.state.like+1
    })
  }
 dislikecount=()=>{
   this.setState({dislike:this.state.dislike+1})
   var dislike=db.ref('Rating/'+'/')
   dislike.update({
      'dislikePressed':this.state.dislike+1
    })
  }
  render(){
    return(
      <View>
      <View>
      <AppHeader />
      <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('JokeScreen')}>
      <Text style={styles.btntxt}>Read a Joke</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('JokeScreen')}>
      <Text style={styles.btntxt}>Horoscope</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('JokeScreen')}>
      <Text style={styles.btntxt}>Weather</Text>
      </TouchableOpacity>
       <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('JokeScreen')}>
      <Text style={styles.btntxt}>Top News</Text>
      </TouchableOpacity>
      </View>
      <View>
      <Text style={{textAlign:'center',margin:20,fontWeight:'bold'}}>Rate US</Text>
      </View>
      <View>
      <Text style={{marginLeft:70,marginTop:15}}>{this.state.dislike}</Text>
      <Text style={{textAlign:'center',marginLeft:150}}>{this.state.like}</Text>
       </View>
       <View>
      <TouchableOpacity onPress={this.dislikecount}>
      <Image 
       source={{uri:'https://cdn.onlinewebfonts.com/svg/img_148450.png'}}
      style={{width:50,height:50,marginLeft:60}}/>
      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity onPress={this.likecount}>
      <Image 
      source={{uri:'https://www.der-kleine-preis.de/landingpage/berbel/img/Daumen_hoch_bmp.png'}}
      style={{width:50,height:50,marginLeft:200,marginTop:-50}}/>
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  button:{
    marginLeft:70,
    marginTop:40,
    width:200,
    height:60,
    backgroundColor:'white',
    borderWidth:2,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25
  },
  btntxt:{
    fontSize:20,
    fontWeight:'bold',
    color:'black'
  }
})