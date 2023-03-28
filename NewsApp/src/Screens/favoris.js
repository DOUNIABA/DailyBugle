import {View, Text, Image,TouchableOpacity,FlatList} from 'react-native';
import React from 'react';
import { useState,useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favoris = ({navigation}) => {
  const [news, setNews] = useState([]);

  const getFavorite=async()=>{
    setNews(JSON.parse(await AsyncStorage.getItem('favotite')))
  }
 
useEffect((()=>{
  getFavorite()
}),[news])

  return (
    <View  style={{
      flex: 1,
      backgroundColor: '#fff',
      backgroundColor: '#000',
    }}>        
    <TouchableOpacity       
          onPress={() => navigation.goBack()} >
          <Image source={require('../../images/icons8-arrière-48.png')}  
          style={{marginTop:10,marginLeft:10,backgroundcolor:'white' }}
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
        Your Favoris
      </Text>

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
              >
                <Image
                  source={{uri:item?.image}}
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
                      marginTop: 8,
                    }}>
                    {item.description}
                  </Text>
                 
                  <TouchableOpacity><Text onPress={()=>Favoritedelete()} style={{color:'white'}}>Annuler</Text></TouchableOpacity>
                </View>
              </TouchableOpacity>
              
            );
          }}
        />
        
    </View>
  );
};

export default Favoris;

export const Favoritedelete = async () => {
  await AsyncStorage.clear();
};

