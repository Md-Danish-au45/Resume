import { View, Text,Image,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("../Images/4.jpg")} style={styles.img} />
      <View>
        <Text style={styles.text}>My Name is Danish. I am from New Delhi.i did my diploma from Board Of Technical Education.
          currently i am pursuing in Btech from Maharishi Dayanand University and i am in last semester in 
          Computer Science Engineering. I have done my training as a full stack developer in AttainU.
          And My hobby is I love playing football and i can easily adapt and any Environment.
        </Text>

        <TouchableOpacity style={{flex:1,justifyContent:"center", alignItems:"flex-end"}}>
          <Text style={styles.btn} onPress={() => navigation.navigate("Resume")}>Go to my  Resume <FontAwesome name='hand-o-right' size={30}  /> </Text>
        </TouchableOpacity>
       
      </View>
  
    </View>
  )
}

const {width} = Dimensions.get("screen")
const  styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'lightcoral'
  },
  img:{
    width:width,
    resizeMode: 'cover',
    height:300,
    borderWidth:3,
    borderWidth:5,
    borderColor:"black",
  },
  text:{
    marginTop:20,
    fontSize:20,
    fontWeight:"900",
    color:"white",
    paddingLeft:10
  },
  btn:{
   borderBottomWidth:3,
    borderColor:"black",
    fontSize:30,
    marginTop:60,
    fontWeight:"bold",
    color:"white",
    height:50,
  }
})