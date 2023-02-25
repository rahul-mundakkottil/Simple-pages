import React,{Component} from 'react'
import {
    View,ImageBackground,TextInput,TouchableHighlight,Image,Text
} from 'react-native'





export default class Firstpage extends Component{
    render(){
        return(
          <View style={{height:"100%" ,width:"100%" , alignItems:'center'}}>
            <ImageBackground style={{height:'100%',width:'100%',alignItems:"center", justifyContent:"center"}} source={require('../assets/runimg.jpg')}>
                <Image source={require('../assets/logo4.png')} style={{height:150,width:150,marginTop:0,marginBottom:50}}></Image>
                <TextInput style={{height:'10%',width:'70%',backgroundColor:'', borderColor:"white",borderBottomWidth:3 ,paddingTop:10,marginBottom:5,
                color:'white'}} placeholder="username" placeholderTextColor="white"
                  secureTextEntry={false} maxLength={30}></TextInput>
                  <TextInput style={{ marginTop:10,height:'10%',width:'70%',backgroundColor:'', borderColor:"white",borderBottomWidth:3 ,paddingTop:10,
                   color:'white'}} placeholder="passward" placeholderTextColor="white"
                  secureTextEntry={true} maxLength={30}></TextInput>
                <TouchableHighlight style={{height:"7%",width:"25%",backgroundColor:"grey",borderWidth:0,
                    marginTop:40, alignItems:"center",justifyContent:"center",borderRadius:10,marginBottom:90}} onPress={()=>this.props.navigation.navigate("Secondpage")} >
                  <Text style={{color:"yellow"}} >LOGIN</Text>
                  </TouchableHighlight>
            </ImageBackground>

          </View>

        )
    }

}