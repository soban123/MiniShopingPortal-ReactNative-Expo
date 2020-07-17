import React from 'react'
import {Text , View , StyleSheet} from 'react-native' ;
import {MaterialIcons } from '@expo/vector-icons'

export default function Header({navigation ,  title}) {
    const handleDrawer = () =>{
        navigation.openDrawer();
    }
    return (
        <View  style={styles.Container}>
            <MaterialIcons name="menu" onPress={handleDrawer} size={30} style={styles.openDrawerIcon} />
            <View >
                <Text style={styles.Header}>  { title}  </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

        
    },

    Header: {
        color : 'white' , 
        backgroundColor:'indigo',
        fontSize:25,
       
    },
    openDrawerIcon:{
        color:'white',
        position:'absolute',
        left:5,
    }
}) 
