import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { BusinessScreen } from './Screens/Business';
import { FeaturedScreen } from './Screens/Featured';
import { LoginScreen } from './Screens/Login';
import { NewsScreen } from './Screens/News';
import { SportScreen } from './Screens/Sport';
import { SpotlightScreen } from './Screens/Spotlight';
import { TechScreen } from './Screens/Tech';

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Spotlight" component={SpotlightScreen} />
        <Stack.Screen name="Featured" component={FeaturedScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="Business" component={BusinessScreen} />
        <Stack.Screen name="Tech" component={TechScreen} />
        <Stack.Screen name="Sport" component={SportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;