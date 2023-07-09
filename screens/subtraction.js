import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Header } from '@rneui/themed';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Subtraction extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header
            backgroundColor={'#FBEE95'}
            centerComponent={{
              text: 'Subtraction',
              style: { color: 'white', fontSize: 30, borderRadius: 50 },
            }}
          />
        </View>

        <View>
          <Text style={styles.subtractionCaption}>Choose An Activity</Text>
        </View>
               <View>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => this.props.navigation.navigate('Dyscalculia')}>
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

  subtractionCaption: {
    fontSize: 20,
    color: 'black',
    marginLeft: 75,
    marginTop: 10,
  },

    backButton: {
    height: RFValue(100),
    width: RFValue(260),
    backgroundColor: '#FBEE95',
    borderRadius: 30,
    justifyContent: 'center',
    marginLeft: 50,
  },

  backText: {
    fontSize: RFValue(30),
    alignSelf: 'center',
  },
});
