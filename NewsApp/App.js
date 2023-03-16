
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import News from './src/Screens/News';
import CategoryNews from './src/Screens/CategoryNews';
import NewsDetails from './src/Screens/NewsDetails';
import BottomTab from './Navigation/BottomTab';
import Home from './src/Screens/Home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown:false}} />     
        <Stack.Screen name="NewsDetails" component={NewsDetails} options={{headerShown:false}} />
        <Stack.Screen name="CategoryNews" component={CategoryNews} options={{headerShown:false}} />
        <Stack.Screen name="News" component={BottomTab} options={{headerShown:false}} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;