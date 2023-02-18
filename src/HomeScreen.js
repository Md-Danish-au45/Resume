import { View,ImageBackground, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import FontAwesome from '@expo/vector-icons/FontAwesome';


 function HomeScreen() {
    const navigation = useNavigation()
  
  return (
    <View style={styles.container}>
    
      <ImageBackground source={require("./Images/abc.jpg")} resizeMode="cover" style={styles.img}>
        <TouchableOpacity>
         <Text style={styles.text} onPress={() => navigation.navigate("Profile")} ><FontAwesome name='hand-o-right' size={40}  />Md Danish!!</Text>
        </TouchableOpacity>
      </ImageBackground>
   </View>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img:{
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    
  },
  text:{
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
    justifyContent:"center",
    alignItems:"center",
  }

})


export default HomeScreen;