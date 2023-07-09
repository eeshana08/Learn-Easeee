import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './screens/home';
import Adhd from './screens/adhd';
import Dyscalculia from './screens/dyscalculia';
import Dyslexia from './screens/dyslexia';
import Avatar from './screens/avatar';
import Videos from './screens/videos';
import Fun from './screens/fun';
import Reading from './screens/reading';
import Listening from './screens/listening';
import Addition from './screens/addition';
import Subtraction from './screens/subtraction';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initalRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Dyslexia" component={Dyslexia} />
        <Stack.Screen name="Dyscalculia" component={Dyscalculia} />
        <Stack.Screen name="Avatar" component={Avatar} />
        <Stack.Screen name="Adhd" component={Adhd} />
        <Stack.Screen name="Videos" component={Videos} />
        <Stack.Screen name="Fun" component={Fun} />
        <Stack.Screen name="Reading" component={Reading} />
        <Stack.Screen name="Listening" component={Listening} />
        <Stack.Screen name="Addition" component={Addition} />
        <Stack.Screen name="Subtraction" component={Subtraction} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
