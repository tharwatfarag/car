// اول صفحه 

import * as React from 'react'

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  Dimensions
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends React.Component {
  async out() {
    await AsyncStorage.setItem('auth', '')
    this.props.navigation.navigate("Page1")


  }
  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            backgroundColor: "#000"
          }}
        >

          <View

            style={{
              justifyContent: 'space-between',
              alignItems: "center",
              width: "100%",
              backgroundColor: "#1d1d1d",
              flexDirection: "row",
            }}>
            <Text
              style={{
                fontSize: 23,
                padding: 12,
                fontWeight: "800",
                textAlign: "center", width: '90%',
                marginRight: -15,
                marginLeft: 15,
                color: "#ddd"

              }}
            >
              Road Helper
            </Text>
            <TouchableOpacity
              onPress={() => {
                // this.setState({ modalinfo: true })
                this.props.navigation.navigate("Info")

              }}
            >
              <Image
                source={require('../assets/user-icon.jpg')}
                style={{
                  height: 25,
                  width: 25,
                  marginRight: 30
                }}
              />
            </TouchableOpacity>

          </View>
          <TouchableOpacity
            onPress={() => {
              // this.props.navigation.navigate("Login")
              this.out()
            }}
            style={{
              flexDirection: "row",

              alignItems: "center"
            }}
          >

            <Icons
              name={"sign-out-alt"}
              size={30}
              color='#fff'
              style={{
                marginLeft: 10
              }}
            />
            <Text style={{
              marginLeft: 10
            }}>
              Log out
            </Text>

          </TouchableOpacity>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50
            }}
          >

            <TouchableOpacity
              onPress={() => {
                // this.setState({ modalpetrol: true })
                this.props.navigation.navigate("Petrol")

              }}
              style={{
                backgroundColor: "#ddd",
                height: 100, width: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: .5,
                borderColor: "#ddd"
              }}
            >
              <Icons
                name='gas-pump'
                size={70}
                color='#1d1d1d'
              />

            </TouchableOpacity>
            <Text
              style={{
                fontSize: 23,
                padding: 12,
                fontWeight: "800",
                color: "#686868"



              }}
            >
              Petrol
            </Text>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50
            }}
          >

            <TouchableOpacity
              onPress={() => {
                // this.setState({ malfunctionmodal: true })
                this.props.navigation.navigate("Malfunction")

              }}
              style={{
                backgroundColor: "#1d1d1d",
                height: 100, width: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: .5,
                borderColor: "#ddd"
              }}
            >
              <Image
                source={require('../assets/car.jpg')}
                style={{
                  height: 90,
                  width: 90,
                  backgroundColor: "#ddd"


                }}
              />
              {/* <i class="fas fa-car-mechanic"></i> */}
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 23,
                padding: 12,
                fontWeight: "800",
                color: "#686868"



              }}
            >
              Malfunction
            </Text>
          </View>



          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50
            }}
          >

            <TouchableOpacity
              onPress={() => {
                // this.setState({ winshmodal: true })
                this.props.navigation.navigate("Winch")

              }}
              style={{
                backgroundColor: "#1d1d1d",
                height: 100, width: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: .5,
                borderColor: "#ddd"
              }}
            >
              <Image
                source={require('../assets/images.png')}
                style={{
                  height: 90,
                  width: 90,
                  backgroundColor: "#ddd"

                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 23,
                padding: 12,
                fontWeight: "800",
                color: "#686868"



              }}
            >
              Winch
            </Text>
          </View>

        </View>

      </>
    )
  }
}