import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Dyscalculia extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Header
            backgroundColor={'#FBEE95'}
            centerComponent={{
              text: 'Dyscalculia',
              style: { color: 'white', fontSize: 30, borderRadius: 50 },
            }}
          />
        </View>

        <View style={styles.container3}>
          <Text style={styles.dyscalculiaCaption}>Choose An Activity</Text>
        </View>
        <View style={styles.container4}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => this.props.navigation.navigate('Addition')}>
            <Text style={styles.addText}>Addition</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.subtractButton}
            onPress={() => this.props.navigation.navigate('Subtraction')}>
            <Text style={styles.subtractText}>Subtraction</Text>
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

  dyscalculiaCaption: {
    fontSize: 20,
    color: 'black',
    marginLeft: 85,
    marginTop: 10,
  },

  addButton: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#FBEE95',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 50,
  },

  addText: {
    fontSize: RFValue(30),
    alignSelf: 'center',
  },

  subtractButton: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#FBEE95',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 50,
  },

  subtractText: {
    fontSize: RFValue(30),
    alignSelf: 'center',
  },

  backButton: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#FBEE95',
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
