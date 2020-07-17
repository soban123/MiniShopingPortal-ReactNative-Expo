import React , {useState , useEffect} from 'react'
import { View ,  Image, Text ,StyleSheet } from 'react-native';

export default function About({navigation}) {

const [product , setProduct] = useState({title:'lcd'});

useEffect(() => {
    setProduct({ title : navigation.getParam('title') ,
                 price: navigation.getParam('price'),
                imageUrl:  navigation.getParam('imageUrl') })
    
}, [navigation])

    return (
        <View  style={styles.items}>
        <Image
          style={styles.image}
          source={{
            uri: product.imageUrl,
          }}
        />
        <Text style={styles.text}> {product.title} </Text>
        <Text style={styles.text}> {product.price} </Text>
      </View>
    )
}


const styles = StyleSheet.create({
    
    container: {
      height: '100%',
    },
   
    text:{
        fontSize:30 ,
        color:'purple' 
    } ,
    image: {
      width: 100,
      height: 100,
    },
    imagesContainer: {
      textAlign:'center',
      backgroundColor: 'pink',
      alignItems:'center'
    },
    items: {
      height: 200,
      flexDirection:'row',
      fontSize:30,
      
      borderBottomColor:'gray' ,
      alignItems:'center' ,
      borderBottomWidth:8 ,
      justifyContent:"space-around"
      

    },
  
    
  });
