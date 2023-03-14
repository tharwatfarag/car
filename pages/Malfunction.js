

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

export default class Malfunction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // malfunction

      brand: '',
      modal: '',
      locat: '',
      phnum: '',
      malfunctionmodal: false,
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


  // فانكشن اللوكيشن 
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

          //  console.log(initialRegion)          

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

  // فانكشن اضافه العطل
  add_malfunctions() {


    let data_to_send = {
      prand: this.state.brand,
      modal: this.state.modal,
      location: this.state.resion.latitude + "," + this.state.resion.longitude,
      telephone: this.state.phnum,
    };
    this.setState({ loading: true });

    axios
      .post('https://zfactory.000webhostapp.com/CarApp/add_malfunctions.php', data_to_send)
      .then((res) => {

        if (res.status == 200) {
          if (res.data == 'success') {
            alert('تم اضافة العطل بنجاح')
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
              Malfunction
            </Text>
          </View>

          <ScrollView>
            <TouchableOpacity
              onPress={() => {
                // this.setState({ modalpetrol: false })
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
              Brand
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
                // keyboardType='number-pad'

                placeholderTextColor={"#686868"}
                placeholder='enter car brand'
                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.brand}

                onChangeText={(value) => {
                  this.setState({
                    brand: value,

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
                  color={"#686868"}
                  name="car"
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
              Modal
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
                placeholder='enter car modal'
                keyboardType="email-address"

                style={{
                  flex: 1,

                  // backgroundColor: '#FFF',

                  textAlign: 'center',
                  fontSize: 17,
                  color: "#ddd",

                }}
                value={this.state.modal}

                onChangeText={(value) => {
                  this.setState({
                    modal: value,
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
                  color={"#686868"}
                  name="car"
                  size={24}
                />
              </View>
            </View>

            {/* map-marker-alt */}








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
                    // marginLeft: 35
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
                  color={"#686868"}
                  name="map-marker-alt"
                  size={24}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                padding: 12,
                fontWeight: "600", marginTop: 30,
                color: "#686868"
              }}
            >
              Telephone
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
                value={this.state.phnum}

                onChangeText={(value) => {
                  this.setState({
                    phnum: value,

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
                  color={"#686868"}
                  name="phone"
                  size={24}
                />
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                if (
                  this.state.brand.length > 0 && this.state.modal.length > 0 && this.state.phnum.length > 0
                ) {
                  this.add_malfunctions()
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