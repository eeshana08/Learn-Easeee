import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';
import { RFValue } from 'react-native-responsive-fontsize';
import {Linking} from 'react-native';

export default class Videos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Header
            backgroundColor={'#C3EEFA'}
            centerComponent={{
              text: 'Videos',
              style: { color: 'white', fontSize: 30, borderRadius: 50 },
            }}
          />
        </View>

        <View style={styles.container3}>
          <Text style={styles.videosCaption}>Choose A Video</Text>
        </View>
        <View style={styles.container4}>
          <TouchableOpacity
            style={styles.video1Button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=zscDuPMQ3go')}>
            <Text style={styles.video1Text}>Sleep Anxiety Remedy Video</Text>
          </TouchableOpacity>
           <TouchableOpacity
            style={styles.video1Button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=gAZM_XKTl6U')}>
            <Text style={styles.video1Text}>Calming Sensory Video</Text>
          </TouchableOpacity>
             <TouchableOpacity
            style={styles.video1Button}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=UEuFi9PxKuo')}>
            <Text style={styles.video1Text}>Bubble Bounce Video</Text>
          </TouchableOpacity>
        </View>
               <View style={styles.container5}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.props.navigation.navigate('Adhd')}>
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
flex: 0.6,
},

container5: {
flex: 0.1,
},

  videosCaption: {
    fontSize: 20,
    color: 'black',
    marginLeft: 100,
    marginTop: 10,
  },

    backButton: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#C3EEFA',
    borderRadius: 30,
    justifyContent: 'center',
    marginLeft: 50,
  },
  backText: {
    fontSize: RFValue(30),
    alignSelf: 'center',
  },

     video1Button: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#C3EEFA',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 50,
  },
  video1Text: {
    fontSize: RFValue(20),
    alignSelf: 'center',
  },
});
