import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';
import { RFValue } from 'react-native-responsive-fontsize';
export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header
            backgroundColor={'#CCB7E5'}
            centerComponent={{
              text: 'Avatar',
              style: { color: 'white', fontSize: 30, borderRadius: 50 },
            }}
          />
        </View>

        <View>
          <Text style={styles.avatarCaption}>Choose An Activity</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.changeButton}>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View>
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

  avatarCaption: {
    fontSize: 20,
    color: 'black',
    marginLeft: 86,
    marginTop: 10,
  },

  changeButton: {
    height: RFValue(75),
    width: RFValue(210),
    backgroundColor: '#CCB7E5',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 50,
  },

  changeText: {
    fontSize: RFValue(30),
    alignSelf: 'center',
  },

  backButton: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#CCB7E5',
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
