import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import News from '../src/Screens/News';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Home from '../src/Screens/Home';
import NewsDetails from '../src/Screens/NewsDetails';
import Favoris from '../src/Screens/favoris';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
    screenOptions={{headerShown: false}}
      tabBarOptions={{
        style: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        showLabel: false,
        activeTintColor:"green",
      }}>
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: () => (
            <Image source={require('../src/icon/icons8-page-d’accueil-24.png')} style={{width:30}}/>
          ),
        }}
      />
       <Tab.Screen
        name="favoris"
        component={Favoris}
        options={{
          tabBarIcon: () => (
            <Image source={require('../src/icon/icons8-ruban-marque-page-30.png')} style={{width:30}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;