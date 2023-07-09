import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';
import { RFValue } from 'react-native-responsive-fontsize';
import { Linking } from 'react-native';

export default class Fun extends React.Component {
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
              text: 'Fun Games',
              style: { color: 'white', fontSize: 30, borderRadius: 50 },
            }}
          />
        </View>

        <View style={styles.container3}>
          <Text style={styles.funCaption}>Choose An Activity</Text>
        </View>

        <View style={styles.container4}>
          <TouchableOpacity
            style={styles.game1Button}
            onPress={() =>
              Linking.openURL(
                'https://www.mentalup.co/samples/game-v2/game11?referrer=blog-attention-games-for-adhd&page=Desktop&ga_dp=%2Fblog%2Fattention-games-for-adhd'
              )
            }>
            <Text style={styles.game1Text}>Spot The Difference</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.game1Button}
            onPress={() =>
              Linking.openURL(
                'https://www.mentalup.co/samples/game-v2/game90?referrer=blog-attention-games-for-adhd&page=Desktop&ga_dp=%2Fblog%2Fattention-games-for-adhd'
              )
            }>
            <Text style={styles.game1Text}>Find The Objects</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.game1Button}
            onPress={() =>
              Linking.openURL(
                'https://www.mentalup.co/samples/game-v2/game51?referrer=blog-attention-games-for-adhd&page=Desktop&ga_dp=%2Fblog%2Fattention-games-for-adhd'
              )
            }>
            <Text style={styles.game1Text}>Color Candies</Text>
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

  funCaption: {
    fontSize: 20,
    color: 'black',
    marginLeft: 75,
    marginTop: 10,
  },
  game1Button: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#C3EEFA',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 10,
    marginLeft: 50,
  },

  game1Text: {
    fontSize: RFValue(20),
    alignSelf: 'center',
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
});
