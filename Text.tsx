import React from 'react';
import { StyleSheet, Text, View,Image, TouchableHighlight } from 'react-native';

 interface Props{
    Texto:string;
 }
export default class Texto extends React.Component<Props>{
    
    render() {
        return (
            <Text style={styles.Texto}>{this.props.Texto}</Text>
            
        );
    }
        
    }
 const styles = StyleSheet.create({
       
        Texto:{
          fontSize:28,
          marginTop:20,
          marginVertical:40,
          justifyContent:'center',
          alignItems:'center',
         
        },
    });
