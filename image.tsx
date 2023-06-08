import React from 'react';
import { StyleSheet, Text, View,Image, TouchableHighlight } from 'react-native';

interface Props {
   
    imageIndex:string;
  }

export default function  ImageIndex (props:Props){
 
  
      return(
      <Image style={styles.image} 
      source={{uri:props.imageIndex
     }}/>
   
   
    );  
    
    
}

const styles = StyleSheet.create({
    
    image:{
      width:'80%',
      height:'40%',
      borderRadius:40,
      justifyContent:'space-between',
      alignItems:'center',
      marginVertical:30
    }
  });
  