
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import Texto from './Text';
import ImageIndesx from './image';
import Botao from './button';
import { useState } from 'react';

export default function App() {

  const [index,setIndex]=useState(0)
  const image = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaLR54nL_9zcB9eq2kH2LKUWAuK4_e2nVzSg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSae-DdXLNzl9sd4Nn5mDppFkCiPF0caF07Qw&usqp=CAU',

    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdanIgd9YHmQVZy71kpooA8XZstkHZ1uP_fA&usqp=CAU'
  ]

  const mudarimage=()=>{
    if(index == 2){
   setIndex(0)
    }else{
      setIndex(index+1)

    }
    
  
    
  }


  return (
    <View style={styles.container}>
      <Texto Texto='imagelist' />
      <ImageIndesx imageIndex={image[index]} />

      <Botao botao={mudarimage}  />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1919',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
