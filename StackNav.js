import * as React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import Cards from './Cards'
import About from './About'
import Header from './Header'
const screens = {
 
 
 
  Home:{
    screen: Cards ,
    navigationOptions:({navigation})=>{
     return {
       headerTitle: () => <Header navigation={navigation} title={'Products'} /> 
    }
    }

    
      
      
    
  } ,
  About:{
    screen: About,
   
  } ,
} 


const Stack = createStackNavigator(screens , {
  defaultNavigationOptions :{
    headerStyle: {backgroundColor:'indigo'  } ,
    headerTintColor: 'white'
  }
});

export default Stack;
