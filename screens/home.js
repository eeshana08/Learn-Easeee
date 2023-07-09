import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { Header } from '@rneui/themed';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Header
            backgroundColor={'#CCB7E5'}
            centerComponent={{
              text: 'Learn Ease',
              style: { color: 'white', fontSize: 30, borderRadius: 50 },
            }}
          />
        </View>
        <View style={styles.container3}>
          <Text style={styles.captionText}>Adapt To Your Needs</Text>
        </View>

        <View style={styles.container4}>
          <TouchableOpacity
            style={styles.adhdButton}
            onPress={() => this.props.navigation.navigate('Adhd')}>
            <Text style={styles.adhdTitle}>ADHD</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dyslexiaButton}
            onPress={() => this.props.navigation.navigate('Dyslexia')}>
            <Text style={styles.dyslexiaTitle}>Dyslexia</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dyscalculiaButton}
            onPress={() => this.props.navigation.navigate('Dyscalculia')}>
            <Text style={styles.dyscalculiaTitle}>Dyscalculia</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container5}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Avatar')}>
            <Image
              source={require('../assets/avatar.png')}
              style={styles.avatarImage}
            />
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

  captionText: {
    fontSize: RFValue(20),
    color: 'black',
    marginLeft: 84,
    marginTop: 10,
  },

  adhdButton: {
    height: RFValue(100),
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 45,
    borderRadius: 30,
    backgroundColor: '#C3EEFA',
  },

  adhdTitle: {
    fontSize: RFValue(30),
    alignSelf: 'center',
    color: 'black',
  },

  dyslexiaButton: {
    height: RFValue(100),
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#EFCFD4',
  },

  dyslexiaTitle: {
    fontSize: RFValue(30),
    color: 'black',
    alignSelf: 'center',
  },

  dyscalculiaButton: {
    height: RFValue(100),
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: '#FBEE95',
  },

  dyscalculiaTitle: {
    fontSize: RFValue(30),
    color: 'black',
    alignSelf: 'center',
  },

  avatarImage: {
    height: RFValue(60),
    width: RFValue(60),
    right: -260,
    top: 80,
  },
});
