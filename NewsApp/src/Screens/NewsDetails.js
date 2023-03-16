import {View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewsDetails = () => {
  const route = useRoute();
  const [news, setNews] = useState([]);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Image
        source={{uri: route.params.data.urlToImage}}
        style={{width: '100%', height: 200}}
      />
       <Text
        style={{
          fontSize: 15,
          fontWeight: '800',
          color: '#000',
          marginTop: 10,
          alignSelf: 'center',
          width: '94%',
        }}>
        {route.params.data.source.name}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '500',
          color: 'gray',
          marginTop: 10,
          alignSelf: 'center',
          width: '94%',
        }}>
        {route.params.data.author}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '800',
          color: '#000',
          marginTop: 10,
          alignSelf: 'center',
          width: '94%',
        }}>
        {route.params.data.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#000',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        {route.params.data.description}
      </Text>
      <Text
        style={{
          fontSize: 10,
          fontWeight: '600',
          color: '#000',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        {route.params.data.publishedAt}
      </Text>

      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: '#000',
          marginTop: 10,
          alignSelf: 'center',

          width: '94%',
        }}>
        {route.params.data.content}
      </Text>
      <View>
      <TouchableOpacity onPress={() => addToFavorites(news)}>
      <Image
       source={require('../../images/favori.png')}
        style={{width: '10%', height: 39,alignSelf:'flex-end',marginRight:15}}
      />
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewsDetails;


export const addToFavorites = async (newItem) => {
  try {
    const currentFavorites = await AsyncStorage.getItem('favorites');

    if (!currentFavorites) {
      const newFavorites = [newItem];
      await AsyncStorage.setItem('favorites', JSON.stringify(newFavorites));
      console.log('add')
    } 
    else {
      const parsedFavorites = JSON.parse(currentFavorites);
      parsedFavorites.push(newItem);
      await AsyncStorage.setItem('favorites', JSON.stringify(parsedFavorites));
      console.log('add')
    }
  } catch (error) {
    console.log(error);
  }
};

export const Favoritedelete = async () => {
  await AsyncStorage.clear();
};
