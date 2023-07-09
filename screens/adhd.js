import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Adhd extends React.Component {
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
              text: 'ADHD',
              style: { color: 'white', fontSize: 30, borderRadius: 50 },
            }}
          />
        </View>

        <View style={styles.container3}>
          <Text style={styles.adhdCaption}>Choose An Activity</Text>
        </View>
        <View style={styles.container4}>
          <TouchableOpacity
            style={styles.videosButton}
            onPress={() => this.props.navigation.navigate('Videos')}>
            <Text style={styles.calmingText}>Videos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.funButton}
            onPress={() => this.props.navigation.navigate('Fun')}>
            <Text style={styles.funText}>Fun Games</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container5}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.props.navigation.navigate('Home')}>
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
    flex: 0.5,
  },

  container5: {
    flex: 0.2,
  },

  adhdCaption: {
    fontSize: 20,
    color: 'black',
    marginLeft: 85,
    marginTop: 10,
  },

  videosButton: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#C3EEFA',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 50,
  },

  calmingText: {
    fontSize: RFValue(30),
    alignSelf: 'center',
  },

  funButton: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#C3EEFA',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 50,
  },

  funText: {
    fontSize: RFValue(30),
    alignSelf: 'center',
  },

  backButton: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#C3EEFA',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 50,
  },

  backText: {
    fontSize: RFValue(30),
    alignSelf: 'center',
  },
});
