import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const CategoryNews = () => {

  const navigation = useNavigation();
  const [news, setNews] = useState([]);

  const API_KEY = '3525497ff5f641339cd8761ce978f9a8'; 
  const category = 'technology'; 

  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
      .then(res => res.json())
      .then(output => {
        console.log(output);
        setNews(output.articles);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        backgroundColor: '#000',
      }}>
          <TouchableOpacity       
          onPress={() => navigation.goBack()} >
          <Image source={require('../../images/icons8-arrière-48.png')}  
          style={{marginTop:10,marginLeft:10 }}
      />
      </TouchableOpacity>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: '800',
          marginLeft: 20,
          marginTop: 20,
        }}>
        Titres
      </Text>
      <View>
        <FlatList
          data={news}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  borderColor: '#fff',
                  borderWidth: 1,
                  width: '90%',
                  height: 100,
                  alignSelf: 'center',
                  marginTop: 20,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => {
                  navigation.navigate('NewsDetails', {
                    data: item,
                  });
                }}>
                <Image
                  source={{uri: item.urlToImage}}
                  style={{
                    width: 100,
                    height: 90,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                />
                <View style={{padding: 10}}>
                  <Text
                    style={{
                      color: '#fff',
                      width: '60%',
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    {item.title ? item.title.substring(0, 30) + '...' : '...'}
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      width: '40%',
                      fontSize: 12,
                      marginTop: 10,
                    }}>
                    {item.description
                      ? item.description.substring(0, 30) + '...'
                      : '...'}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CategoryNews;
