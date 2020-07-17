import * as React from 'react';
import { View, Text } from 'react-native';
import Header from './Header'

import { createStackNavigator } from 'react-navigation-stack';



function Checkout (){

    return(
        <View> 
            <Text> Checkout </Text>    
        </View>
    )
}

const screens = {
 
 
 
  Checkout:{
    screen: Checkout ,
    navigationOptions:({navigation})=>{
        return {
          headerTitle: () => <Header navigation={navigation} title={'Checkout'} /> 
       }
       }
  } ,
 
} 


const CheckoutPage = createStackNavigator(screens , {
  defaultNavigationOptions :{
    headerStyle: {backgroundColor:'indigo'  } ,
    headerTintColor: 'white'
  }
});

export default CheckoutPage;
