import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';


const News = () => {
  const navigation = useNavigation();
  const [news, setNews] = useState([]);

  const apiKey = '3525497ff5f641339cd8761ce978f9a8';
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setNews(response.data.articles);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        backgroundColor: '#000',
      }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: '800',
          marginLeft: 20,
          marginTop: 20,
        }}>
        Categories
      </Text>
      <View style={{marginTop: 20, height: 170}}>
        <FlatList
          data={[
            {title: 'technology', image: require('./../../images/tech.jpg')},
            {title: 'health', image: require('./../../images/health.jpg')},
            {title: 'business', image: require('./../../images/business.jpg')},
          ]}
          horizontal
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={{
                  width: 200,
                  height: 150,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                  borderWidth: 1,
                  borderColor: '#fff',
                }}
                onPress={() => {
                  navigation.navigate('CategoryNews', {
                  category: item.title,
                  });
                }}>
                <View style={{width: '100%', height: '100%', borderRadius: 20}}>
                  <Image
                    source={item.image}
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                      position: 'absolute',
                      top: 0,
                      backgroundColor: 'rgba(0,0,0,.5)',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 20, fontWeight: '700'}}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: '800',
          marginLeft: 20,
          marginTop: 20,
        }}>
        All News
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
                  source={{uri: item?.urlToImage}}
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
                      width: 300,
                      fontSize: 14,
                      fontWeight: '700',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      width: 200,
                      fontSize: 12,
                      marginTop: 10,
                    }}>
                    {item.description}
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

export default News;