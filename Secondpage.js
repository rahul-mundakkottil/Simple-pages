import React,{Component} from 'react'
import{ 
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableHighlight



}from 'react-native'
 export default class Secondpage extends Component{

constructor(){
  super();
  this.state=({
    name:'dummyvalue'
  })

}




  render(){
    return( <View style= {styles.container}>
      <Image source={require('../assets/image.jpg')} style={styles.bgimagestyle}></Image>
 
       <Text style={styles.textstyle}>picking your travel destinations</Text>
      
       <TouchableHighlight style={styles.buttonstyle1} >
              <Text style={styles.buttontext}>login with facebook</Text>
             </TouchableHighlight>
             <TouchableHighlight style={styles.buttonstyle2} 
             >
              <Text style={styles.buttontext}>Sign in</Text>
             </TouchableHighlight>
             <View style={{flexDirection:'row'}}>
              <Text style={{marginRight:100,marginTop:10}}>Haven't registered yet?</Text>
              <TouchableHighlight style={{marginTop:10}} ><Text style={{color:'red'}}>Join Now</Text></TouchableHighlight>
             </View>
             
             
  
    </View>
         

    )
  }
 }
const styles=StyleSheet.create({
   
  container:{ height:'100%',
  width:'100%',
  backgroundColor:'white',
  alignItems:'center',
 
  },
  textstyle:{marginTop:140,
    textAlign:'center',
    color:'black',
    fontSize:15,
  marginBottom:20,
marginTop:30} ,

    bgimagestyle:{ 
      height:'42%',
      width:'70%',
      
    },
   logostyle:{ 
    height:150,
    width:150,
   marginLeft:120,
   marginTop:20
  },
 textinputstyle:{
    height:40,
    width:'80%',
    backgroundColor :'grey',
marginLeft: 40,
marginTop:20,
paddingLeft:20,
borderWidth:3,
borderColor:'blue',

 },
 buttonstyle1:{
  height:40,
  width:'80%',
  marginLeft:0,
  marginTop:10,
  backgroundColor:'#4585FB',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:5,
  borderWidth:0.2

 },
 buttonstyle2:{
  height:40,
  width:'80%',
  marginLeft:0,
  marginTop:20,
  backgroundColor:'red',
  alignItems:'center',
  justifyContent:'center',
  borderRadius:5,
  borderWidth:0

 },
 buttontext:{
  fontSize:15,
  color:'white',
  fontWeight:'bold'
  
  
 }
 
 



}
)