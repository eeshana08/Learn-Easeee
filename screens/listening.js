import * as React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';
import { Header } from '@rneui/themed';
import { RFValue } from 'react-native-responsive-fontsize';
import db from '../localdb';
import PhonicSounds from './phonicSounds';

export default class Listening extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      chunks: [],
      phonemeSounds: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Header
            backgroundColor={'#EFCFD4'}
            centerComponent={{
              text: 'Listening',
              style: { color: 'white', fontSize: 30, borderRadius: 50 },
            }}
          />
        </View>

        <View style={styles.container3}>
          <Text style={styles.listeningCaption}>Enter A Word</Text>
        </View>
        <View style={styles.container4}>
          <TextInput
            style={styles.inputbox}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              this.setState({ chunks: db[this.state.text].chunks });
              this.setStae({ phonemeSounds: db[this.state.text].phones });
            }}>
            <Text style={styles.goText}>GO</Text>
          </TouchableOpacity>
    
          {this.state.chunks.map((item,index) => {
            return (
              <PhonicSounds
                wordChunk={this.state.chunks[index]}
                soundChunk={this.state.phonemeSounds[index]}
              />
            );
          })}
        </View>
        <View style={styles.container5}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.props.navigation.navigate('Dyslexia')}>
            <Text style={styles.backText}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  container2: {
    flex: 0.1,
  },

  container3: {
    flex: 0.1,
  },

  container4: {
    flex: 0.4,
  },

  container5: {
    flex: 0.4,
  },


  listeningCaption: {
    fontSize: 20,
    color: 'black',
    marginLeft: 110,
    marginTop: 10,
  },

  backButton: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#EFCFD4',
    borderRadius: 30,
    justifyContent: 'center',
    marginLeft: 50,
    marginTop: 100,
  },

  backText: {
    fontSize: RFValue(30),
    alignSelf: 'center',
  },

  inputbox: {
    borderWidth: RFValue(5),
    borderColor: 'black',
    width: '75%',
    height: RFValue(50),
    margin: RFValue(20),
    marginLeft: 40,
    marginTop: 40,
  },

    goButton: {
    width: '45%',
    height: RFValue(50),
    alignSelf: 'center',
    marginLeft: 5,
    backgroundColor: '#EFCFD4',
    marginTop: 40,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  goText: {
    color: 'black',
    fontSize: 20,
  },
});





