// صفحه اظهار بيانات اليوزر البريد الالكتروني والباسورد

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

export default class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // داتا تيست
      email: 'ahmedshahin@gmail.com',
      user_password: '01111554781',
      user_name: ''
    }
  }







  // فانكشن بتشتغل اول م تدخل الصفحه بتجيب بيانات اليوزر 

  componentDidMount() {
    this.getuserdata()

  }

  //  بيجيب البريد و الاسم والباسورد من صفحه انشاء الحساب اللي اليوزر بيدخلها
  async getuserdata() {
    let data = await AsyncStorage.getItem('userdata')
    data = JSON.parse(data)
    this.setState({
      email: data.user_email,
      user_password: data.user_password,
      user_name: data.user_name
    })


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
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              backgroundColor: "#1d1d1d"
            }}>
            <Text
              style={{
                fontSize: 23,
                padding: 12,
                fontWeight: "800",
                color: "#ddd"
              }}
            >
              Profile
            </Text>
          </View>

          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                // this.setState({ modalinfo: false })
                this.props.navigation.goBack();

              }}
              style={{
                flexDirection: "row",
                justifyContent: 'flex-end',
                alignItems: "center",
                marginRight: 10
              }}
            >


              <Text
                style={{
                  fontSize: 20,
                  padding: 5,
                  color: "#686868"

                }}
              >
                Back
              </Text>
              <Icons
                name='chevron-left'
                color={"#686868"}
                size={22}
              />
            </TouchableOpacity>




            <View
              style={{
                alignSelf: "center",
                marginTop: 30,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Image
                source={require('../assets/user-icon.jpg')}
                style={{
                  height: 120,
                  width: 120
                }}
              />
              <Text
                style={{
                  fontSize: 23,
                  padding: 12,
                  fontWeight: "800",
                  color: "#ddd"
                }}
              >
                {this.state.user_name}
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
                color: "#686868"
              }}
            >
              Email
            </Text>
            <View
              style={{
                width: '90%',
                height: 50,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"

                placeholderTextColor={"#686868"}
                keyboardType="email-address"

                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.email}

                onChangeText={(value) => {
                  // this.setState({
                  //     email: value,
                  //     emailerr: '',
                  // });
                }}
              />
              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>
                <Icons
                  color={"#686868"}
                  name="envelope"
                  size={24}
                />
              </View>
            </View>


            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
                color: "#686868"
              }}
            >
              Password
            </Text>
            <View
              style={{
                width: '90%',
                height: 50,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",


              }}>

              <TextInput
                autoCapitalize="none"

                placeholderTextColor={"#686868"}
                keyboardType="email-address"

                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.user_password}

                onChangeText={(value) => {
                  // this.setState({
                  //     email: value,
                  //     emailerr: '',
                  // });
                }}
              />
              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>
                <Icons
                  color={"#686868"}
                  name="lock"
                  size={24}
                />
              </View>
            </View>

          </ScrollView>
        </View>
      </>
    )
  }
}