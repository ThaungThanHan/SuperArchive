import React, {useState,useEffect} from 'react';
import {Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import Results from './components/Results';
import Info from './components/Info';

const Stack = createStackNavigator();

class App extends React.Component {
  render(){
    return(
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Results" component={Results} />
          <Stack.Screen name="Info" component={Info} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;

  // useEffect(()=>{
  //   fetch(`https://superheroapi.com/api/${accessToken}/search/batman`)
  //     .then(response=>response.json())
  //     .then(json=>setHeroes(json))
  //     .catch(error=>console.error(error))
  // })