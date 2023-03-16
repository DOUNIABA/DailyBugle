import React from 'react';
import {Text,TouchableOpacity, StyleSheet, View, Image,SafeAreaView} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <View style={{height: 350, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          style={{
            width: 300,
            height: 300,
            borderRadius: 300/2,
            marginTop:100,

          }}
          source={require('../../images/tech.jpg')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginTop:50,}}>
           Daily Bugle
          </Text>
          <Text
            style={{
              marginTop: 20,
              fontSize: 18,
              textAlign: 'center',
              color: "grey",
            }}>
            We help you to find fast and daily news
          </Text>
        </View>
       
        <TouchableOpacity style={style.button}>
        <Text onPress={() =>navigation.navigate("News")} style={{fontWeight:'bold' ,color:'white', fontSize:18}}>Show news</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: "yellowgreen",
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "grey",
    marginHorizontal: 5,
  },
  button:{
    backgroundColor: 'blue',
    height:50,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    // marginBottom:50
  }
});

export default Home;
