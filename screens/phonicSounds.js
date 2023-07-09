import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Audio} from 'expo-av';

 export default class PhonicSounds extends React.Component {
playSound = async (soundChunk)=>{
  var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
  await Audio.Sound.createAsync(
    {
      uri: soundLink
    },
    {
      shouldPlay: true
    }
  )
}

render(){
  return(
    <View>
    <TouchableOpacity style={styles.chunkButton}
    onPress={()=>{this.playSound(this.props.soundChunk)}}>
    <Text style={styles.displayText}>{this.props.wordChunk}</Text>
    </TouchableOpacity>
    </View>
  )
}
 }

 const styles = StyleSheet.create({
     displayText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  chunkButton: {
    width: 80,
    height: 50,
    backgroundColor: '#EFCFD4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 5,
    marginLeft: 130,
  },
 })