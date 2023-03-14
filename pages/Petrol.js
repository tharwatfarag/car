

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
  Dimensions,
  ActivityIndicator,
  PermissionsAndroid
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker, PROVIDER_GOOGLE, Polygon, Circle } from 'react-native-maps';
// const map = React.useRef();

export default class Petrol extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      location: '',
      tel: '',
      ch1: false,
      ch2: false,
      ch3: false,
      loading: false,
      resion: {
        latitude: 30.78997862686301,
        longitude: 31.001596385997733,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      showmap: false,
      chosen_done: false
    }
  }
  componentDidMount() {
    this._requestMapPermission();
  }

  async _requestMapPermission() {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Need Location Permission',
        message: 'Need access to your location ',
      },
    );

    if (granted) {

      Geolocation.getCurrentPosition(
        position => {
          let initialRegion = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          };
          this.setState({ resion: initialRegion })


        },
        error => {
          console.log(error.code, error.message);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,

        },
      );
    }
  }

  add_petrol() {
    let type = ""
    if (this.state.ch1) {
      type = "80"
    }
    if (this.state.ch2) {
      type = "90"
    }
    if (this.state.ch3) {
      type = "95"
    }
    let data_to_send = {
      petrol_type: type,
      countaty: this.state.quantity + "",
      location: this.state.resion.latitude + "," + this.state.resion.longitude,
      telephone: this.state.tel,
    };
    this.setState({ loading: true });
    // console.log(data_to_send)
    axios
      .post('https://zfactory.000webhostapp.com/CarApp/add_petrol.php', data_to_send)
      .then((res) => {

        if (res.status == 200) {
          if (res.data == 'success') {
            alert('تم اضافة العطل بنجاح')
            this.setState({
              quantity: 0,
              location: '',
              tel: '',
              ch1: false,
              ch2: false,
              ch3: false,
            })
            this.props.navigation.goBack();

          } else if (res.data == 'error') {
            alert('عذرا يرجي المحاوله في وقت لاحق')
          } else {
            alert('عذرا يرجي المحاوله في وقت لاحق')
          }
        }
        else {
          alert('عذرا يرجي المحاوله في وقت لاحق')
        }
        this.setState({ loading: false });
      });

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
              Petrol
            </Text>
          </View>
          <ScrollView>

            <TouchableOpacity
              onPress={() => {
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

            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600",
                marginTop: 30,
                color: "#686868"
              }}
            >
              Type
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >



              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ch1: false,
                    ch2: false,
                    ch3: true
                  })
                }}
                style={{
                  backgroundColor: "#1d1d1d",
                  height: 60,
                  width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: this.state.ch3 ? '#0f0' : "#ddd"

                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#686868"
                  }}
                >
                  95
                </Text>
                {/* <i class="fas fa-car-mechanic"></i> */}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ch1: false,
                    ch2: true,
                    ch3: false
                  })
                }}
                style={{
                  backgroundColor: "#1d1d1d",
                  height: 60, width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: this.state.ch2 ? '#0f0' : "#ddd"

                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#686868"

                  }}
                >
                  90
                </Text>
                {/* <i class="fas fa-car-mechanic"></i> */}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    ch1: true,
                    ch2: false,
                    ch3: false
                  })
                }}
                style={{
                  backgroundColor: "#1d1d1d",
                  height: 60, width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: this.state.ch1 ? '#0f0' : "#ddd"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#686868"

                  }}
                >
                  80
                </Text>
                {/* <i class="fas fa-car-mechanic"></i> */}
              </TouchableOpacity>

            </View>














            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600",
                marginTop: 30,
                color: "#686868"

              }}
            >
              Quantity
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
                keyboardType='number-pad'

                placeholderTextColor={"#686868"}
                placeholder='enter value by leter'
                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.quantity}

                onChangeText={(value) => {
                  this.setState({
                    quantity: value,

                  });
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
                  color={"#ddd"}
                  name="gas-pump"
                  size={24}
                />
              </View>
            </View>


            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600"
                , marginTop: 30,
                color: "#686868"
              }}
            >
              location
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({ showmap: true })
              }}
              style={{
                width: '90%',
                height: 50,
                backgroundColor: '#1d1d1d',
                flexDirection: 'row',
                alignSelf: "center",
                alignItems: "center",
                justifyContent: 'space-between'
              }}>
              {this.state.chosen_done ? (
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    color: "#0f0",
                    marginLeft: 35
                  }}
                >
                  location been stored successfully
                </Text>
              ) : (
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    color: "#686868",
                    marginLeft: 35
                  }}
                >
                  press to get location
                </Text>
              )}


      
              <View
                style={{
                  // backgroundColor: '#FFFFFF',
                  width: '15%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',


                }}>

                <Icons
                  color={"#ddd"}
                  name="map-marker-alt"
                  size={24}
                />
              </View>
            </TouchableOpacity>








            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600",
                marginTop: 30,
                color: "#686868"
              }}
            >
              telephone
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
                keyboardType='number-pad'

                placeholderTextColor={"#686868"}
                placeholder='enter phone'
                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.tel}

                onChangeText={(value) => {
                  this.setState({
                    tel: value,

                  });
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
                  color={"#ddd"}
                  name="phone"
                  size={24}
                />
              </View>
            </View>
            <TouchableOpacity
              disabled={this.state.loading}
              onPress={() => {
                if (
                  this.state.quantity > 0 && this.state.tel.length > 0
                ) {
                  this.add_petrol()
                } else {
                  alert('invalid data')

                }
              }}
              style={{
                width: '50%',
                height: 60,
                backgroundColor: "#2d62cc",
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 20
              }}
            >
              {this.state.loading ? (
                <ActivityIndicator
                  size={25}
                  color="#fff"
                />
              ) : (
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: "#ddd"
                }}>Confirm</Text>
              )}

            </TouchableOpacity>
          </ScrollView>
        </View>
        <Modal
          visible={this.state.showmap}
          onRequestClose={() => {
            this.setState({ showmap: false })
          }}
          animationType='slide'
        >
          <View style={{
            paddingHorizontal: 10,
            backgroundColor: 'white',
            flex: 1,
          }}>
            <MapView
              // showsCompass
              showsUserLocation
              showsMyLocationButton
              // ref={map}
              region={this.state.resion}

              provider={PROVIDER_GOOGLE} // remove if not using Google Maps
              style={{
                flex: 1
              }}

            >
              <Marker
                coordinate={this.state.resion}
                title={"موقعك"}

              // description={"description"}
              />

            </MapView>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('MainPage')
                // additem()
                this.setState({ showmap: false, chosen_done: true })

              }}
              style={{
                width: "90%", borderRadius: 10, justifyContent: "center"
                , alignSelf: "center", marginTop: 30,
                marginBottom: 10,
                shadowColor: "#000",

                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
                backgroundColor: "#009bb1",
                padding: 5,



              }}
            >
              <Text style={{
                fontSize: 22, textAlign: "center", color: "#fff",
              }}>
                تأكيد
              </Text>

            </TouchableOpacity>

          </View>


        </Modal>
      </>
    )
  }
}