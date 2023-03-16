import {View, Text, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NewsDetails = ({navigation}) => {
  const Favoris = async news => {
    let newFavorites = (await AsyncStorage.getItem('favotite')) || '[]';
    newFavorites = JSON.parse(newFavorites);
    newFavorites.push(news);
    await AsyncStorage.setItem('favotite', JSON.stringify(newFavorites));
  };
  
  const route = useRoute();
  const [news, setNews] = useState([]);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity       
          onPress={() => navigation.goBack()} >
          <Image source={require('../../images/icons8-gauche-24.png')}  
          style={{marginTop:10,marginLeft:10 }}
      />
      </TouchableOpacity>
      <Image
        source={{uri: route.params.data?.urlToImage}}
        style={{width: '100%', height: 200 ,marginTop:10}}
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
      <TouchableOpacity onPress={() => Favoris({
        name:route.params.data.source.name,
        description:route.params.data.description,
        image:route.params.data?.urlToImage})}>
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


export const Favoritedelete = async () => {
  await AsyncStorage.clear();
};
