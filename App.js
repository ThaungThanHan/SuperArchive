import React, {useState,useEffect} from 'react';
import {Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './components/HomeScreen';
import Results from './components/Results';
import InfoContainer from './components/InfoContainer';
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    myOwnColor: '#BADA55',
  }
};

class App extends React.Component {
  render(){
    return(
      <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Results" component={Results} />
          <Stack.Screen name="InfoContainer" component={InfoContainer} />
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
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