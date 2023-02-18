import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

// icons 
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Entypo from "react-native-vector-icons/Entypo"
import Foundation from "react-native-vector-icons/Foundation"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function Resume() {
  return (
    <View style={styles.container}>
      <ScrollView>

        {/* this is first section1 intro */}

        <View style={styles.topNav}>
          <Text style={{ fontSize: 36, fontWeight: "700" }}>Md Danish</Text>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>Full STack Developer</Text>
          <Text style={{ fontSize: 15, fontWeight: "500" }}>Immediate joining, Seeking an opportunity in the field of software Engineer. Strong in design and integration with problem-solving skills
            and Proficient in HTML, CSS, JAVASCRIPT,NODEJS,EXPRESS.JS, etc. Passionate about implementing and launching new projects and i
            am able to translate business requirements into technical solutions.</Text>
        </View>

        {/* {/* this is second section 2* details and address/} */}

        <View style={styles.container1}>
          <Text style={{ color: "white", marginTop: 10, paddingLeft: 10 }}><MaterialCommunityIcons name='gmail' size={20} />danishm8560@gmail.com</Text>
          <Text style={{ color: "white", marginTop: 10, paddingLeft: 10 }}><Foundation name='telephone' size={20} />7982981354</Text>
          <Text style={{ color: "white", marginTop: 10, paddingLeft: 10 }}><Entypo name='address' size={20} />Qutub vihar phase-1 New delhi-110071, New Delhi,India</Text>
          <Text style={{ color: "white", marginTop: 10, paddingLeft: 10 }}><FontAwesome name='birthday-cake' size={20} />11 January 2000</Text>
          <Text style={{ color: "white", marginTop: 10, paddingLeft: 10 }}><AntDesign name='linkedin-square' size={20} />linkedin.com/in/md-danish-003180208 </Text>
          <Text style={{ color: "white", marginTop: 10, paddingLeft: 10 }}><AntDesign name='github' size={20} />https://github.com/Md-Danish-au45</Text>
        </View>

        {/* this is third section 3 Experience  */}
        <View style={styles.container2}>
          <Text style={{ fontSize: 27.5, fontWeight: "700", }}>  EXPERIENCE</Text>
          <Text style={{ fontSize: 27, fontWeight: "700" }}>- Full Stack Developer</Text>
          <Text style={{ fontSize: 27, fontWeight: "400" }}>   AttainU</Text>
          <Text style={{ fontSize: 13, fontWeight: "500", paddingLeft: 20 }}>. In AttainU i was working and gaining my skills.</Text>
          <Text style={{ fontSize: 13, fontWeight: "500", paddingLeft: 20 }}>. And i was working on a project as a web development.</Text>
          <Text style={{ fontSize: 13, fontWeight: "500", paddingLeft: 20 }}>. In AttainU i was taking training as a MERN stack.</Text>
        </View>

        {/* this is forth section 4 */}
        {/* Personal projects  */}
        <View style={styles.container3}>
          <Text style={{ fontSize: 27.5, fontWeight: "700", paddingLeft: 20 }}>PERSONAL PROJECTS</Text>

          {/* Project 1 */}
          <Text style={{ fontSize: 27, fontWeight: "700" }}>- Blog Website</Text>
          <Text style={{ fontSize: 22, fontWeight: "400", color: 'grey', paddingLeft: 20 }}>https://blogapp-1wum.onrender.com</Text>
          <Text style={{ fontSize: 20, fontWeight: "700", paddingLeft: 20 }}>Backend project</Text>

          <Text style={{
            fontSize: 13,
            fontWeight: "500",
            paddingLeft: 20,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomWidth: 2, paddingBottom: 10
          }}>.In the blog User can login and signUp page after {"\n"}
            the signup the page user can post the blog and update delete give the reviews the in the blogapp.</Text>


          {/* project 2 */}

          <Text style={{ fontSize: 27.5, fontWeight: "700", }}>- Student App</Text>
          <Text style={{ fontSize: 20, fontWeight: "400", color: 'grey', paddingLeft: 20 }}>https://github.com/Md-Danish-au45/student- app-with-crud</Text>
          <Text style={{ fontSize: 22, fontWeight: "700", paddingLeft: 20 }}>Backend project</Text>
          <Text style={{
            fontSize: 13,
            fontWeight: "500",
            paddingLeft: 20,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomWidth: 2, paddingBottom: 10
          }}>.In the api i am using crud operation.User can Create Delete Update Delete Method.</Text>


          {/* project 3 */}

          <Text style={{ fontSize: 27.5, fontWeight: "700", }}>- World food tour</Text>
          <Text style={{ fontSize: 20, fontWeight: "400", color: 'grey', paddingLeft: 20 }}>https://github.com/Md-Danish-au45/world- food-tour</Text>
          <Text style={{ fontSize: 22, fontWeight: "700", paddingLeft: 20 }}>Backend project</Text>
          <Text style={{
            fontSize: 13,
            fontWeight: "500",
            paddingLeft: 20,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomWidth: 2, paddingBottom: 10
          }}>.In world food tour project by using javascript, nodejs, expressjs a nd i will
            be using mongodb in this project.In this project we are using JWT auth
            and generate the jwt token.In this project there is a home page and cart
            page and order summary selection.User can select the food and buy and
            user can also select the add to cart.</Text>


          {/* project 4 */}

          <Text style={{ fontSize: 27.5, fontWeight: "700", }}>- Portfolio</Text>
          <Text style={{ fontSize: 20, fontWeight: "400", color: 'grey', paddingLeft: 20 }}>https://danish-portfolio.onrender.com/</Text>
          <Text style={{ fontSize: 22, fontWeight: "700", paddingLeft: 20 }}>Front-end project</Text>
          <Text style={{
            fontSize: 13,
            fontWeight: "500",
            paddingLeft: 20,
          }}>.In the wensite i am using Front-end like:- html,css,bootstrap,scss.</Text>
        </View>

        {/* this is five section 5 */}
        {/* Technical Skills */}
        <View style={styles.container4}>
          <Text style={{ fontSize: 27.5, fontWeight: "700", }}>  TECHNICAL SKILLS</Text>
          <View style={styles.container4a}>
            <TouchableOpacity style={styles.text4}>
              <Text style={{ fontSize: 27, fontWeight: "700", paddingLeft: 20, color: "white" }}>HTML</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.text4}>
              <Text style={{ fontSize: 27, fontWeight: "700", paddingLeft: 20, color: "white" }}>CSS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.text4}>
              <Text style={{ fontSize: 27, fontWeight: "700", paddingLeft: 20, color: "white" }}>Bootstrap</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.text4}>
              <Text style={{ fontSize: 27, fontWeight: "700", paddingLeft: 20, color: "white" }}>javascript</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.text4}>
              <Text style={{ fontSize: 27, fontWeight: "700", paddingLeft: 20, color: "white" }}>nodejs</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.text4}>
              <Text style={{ fontSize: 27, fontWeight: "700", paddingLeft: 20, color: "white" }}>React JS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.text4}>
              <Text style={{ fontSize: 27, fontWeight: "700", paddingLeft: 20, color: "white" }}>React native</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.text4}>
              <Text style={{ fontSize: 27, fontWeight: "700", paddingLeft: 20, color: "white" }}>Render</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.text4}>
              <Text style={{ fontSize: 27, fontWeight: "700", paddingLeft: 20, color: "white" }}>mongodb</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.text4}>
              <Text style={{ fontSize: 27, fontWeight: "700", paddingLeft: 20, color: "white" }}>Git</Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* this is six section 6 */}
        {/* Qualifications */}

        <View style={styles.container2}>
          <Text style={{ fontSize: 27.5, fontWeight: "700", }}>  QUALIFICATIONS</Text>
          <Text style={{ fontSize: 24, fontWeight: "700", paddingLeft: 20 }}>World College Of Technology And Management</Text>
          <Text style={{ fontSize: 22, fontWeight: "400" }}>   (10/2019 - 09/2023)</Text>
          <Text style={{
            fontSize: 16, fontWeight: "500", paddingLeft: 20, borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomWidth: 2, paddingBottom: 10
          }}><AntDesign name='book' size={20} />Computer Science Engineering from Maharishi Dayanand University</Text>

          <Text style={{ fontSize: 24, fontWeight: "700", paddingLeft: 20 }}>Chhotu Ram rural institute of Technology</Text>
          <Text style={{ fontSize: 22, fontWeight: "400", paddingLeft: 20 }}>(03/2016 - 07/2019)</Text>
          <Text style={{
            fontSize: 16, fontWeight: "500", paddingLeft: 20, borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomWidth: 2, paddingBottom: 10
          }}><AntDesign name='book' size={20} />board of technical university</Text>

          <Text style={{ fontSize: 24, fontWeight: "700", paddingLeft: 20 }}>Government Co-ed senior secondary school</Text>
          <Text style={{ fontSize: 22, fontWeight: "400", paddingLeft: 20 }}>(03/2015 - 03/2016)</Text>
          <Text style={{
            fontSize: 16, fontWeight: "500", paddingLeft: 20, borderBottomColor: 'black',
          }}><AntDesign name='book' size={20} />From CBSE</Text>
        </View>


        {/* this is seven  section 7*/}
        {/* hobbies */}

        <View style={styles.container6}>
          <Text style={{ fontSize: 27, fontWeight: "bold", color: "black", marginTop: 10, paddingLeft: 20 }}>Hobbies</Text>
          <Text style={{ fontSize: 16, fontWeight: "500", paddingLeft: 20, borderBottomColor: 'black', }}>I love playing football and video games but currently i aminterested in programming</Text>
        </View>

        {/* this is eight  section 8*/}
        {/* languages */}
        <View style={styles.container6}>
          <Text style={{ fontSize: 27, fontWeight: "bold", color: "black", marginTop: 10, paddingLeft: 20 }}>LANGAGES</Text>
          <Text style={{ fontSize: 24, fontWeight: "500", paddingLeft: 20, borderBottomColor: 'black', }}>Hindi</Text>
          <Text style={{ fontSize: 18, fontWeight: "500", paddingLeft: 20, borderBottomColor: 'black', }}>* Full Professional Proficiency</Text>
          <Text style={{ fontSize: 24, fontWeight: "500", paddingLeft: 20, borderBottomColor: 'black', }}>English</Text>
          <Text style={{ fontSize: 18, fontWeight: "500", paddingLeft: 20, borderBottomColor: 'black', }}>* Limited Working Proficiency</Text>
        </View>

        {/* this is nine  section 9*/}
        {/* interests */}
        <View style={styles.container6}>
          <Text style={{ fontSize: 27, fontWeight: "bold", color: "black", marginTop: 10, paddingLeft: 20 }}>INTERESTS</Text>
          <View style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}>
            <Text style={styles.box}>Travelling</Text>
            <Text style={styles.box}>Marketting</Text>
            <Text style={styles.box}>Photograghy</Text>
            <Text style={styles.box}>Writing</Text>
            <Text style={styles.box}>Searching new things</Text>
          </View>
        </View>

      </ScrollView>


    </View>
  )
}


// css 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "lightgrey"

  },
  topNav: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "flex-start",
    borderRadius: 10,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20

  },
  container1: {
    flex: 1.9,
    backgroundColor: "darkslateblue",
    marginTop: 10,
    borderRadius: 10,
    paddingBottom: 20,
    paddingTop: 20,
  },
  container2: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    paddingBottom: 20,
    paddingTop: 20,
    paddingLeft: 20
  },
  container3: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 20,
    paddingBottom: 20,
  },

  container4: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    paddingBottom: 20,

  },
  container4a: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 10,
    paddingBottom: 20,
    flexWrap: "wrap",
    justifyContent: "space-around"

  },
  text4: {
    borderColor: "black",
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "grey",
    marginTop: 10,
    width: 175,
    height: 50,
    alignItems: "center",

  },
  container6: {
    backgroundColor: "white",
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    paddingLeft: 20,
    paddingBottom: 20,
  },

  box: {
    fontSize: 20,
    fontWeight: "500",
    borderWidth: 0,
    marginTop: 10,
    width:150,
    height: 50,
    borderRadius: 10,
    backgroundColor:"coral",
    color:"white",
    
  }
})