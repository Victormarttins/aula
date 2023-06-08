import React from 'react';
import { StyleSheet, Text, View,Image, TouchableHighlight } from 'react-native';

interface Props{
botao:any
}


export default class Botao extends React.Component<Props>{

    declare props:any;
    render() {
        return(
    <TouchableHighlight style={styles.botao}
    onPress={()=>{this.props.botao}}>
      <Text>click</Text>
       </TouchableHighlight>

   
)
    }

}

const styles = StyleSheet.create({
  
   
    botao:{
      alignItems:'center',
      elevation:35,
      justifyContent:'center',
      width:100,
      height:100,
      backgroundColor:'#191970',
      borderRadius:50,
      marginTop:50,
      
  
      
    },
  
  });
  