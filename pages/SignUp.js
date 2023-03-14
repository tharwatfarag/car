

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
    ActivityIndicator
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignUp extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '',
            emailerr: '',
            email: '',
            pass: '',
            passerr: '',
            namerr: '',
            loading: false
        }
    }

    check() {
        var err = 0
        if (this.state.name.length == 0) {
            err++
            let txt = "ادخل الاسم"
            this.setState({ namerr: txt })
        } else {
            this.setState({ namerr: '' })

        }
        if (this.state.email.length == 0) {
            err++
            let txt = "ادخل البريد الالكتروني"
            this.setState({ emailerr: txt })
        } else {
            this.setState({ emailerr: '' })

        }
        if (this.state.pass.length == 0) {
            err++
            let txt = "ادخل كلمة السر"
            this.setState({ passerr: txt })
        } else {
            this.setState({ passerr: '' })

        }

        if (err == 0) {
            this.signup()
        }
    }

    async savedata(data) {
        await AsyncStorage.setItem('userdata', JSON.stringify(data))
        await AsyncStorage.setItem('auth', 'loged')
        console.log(data)
        this.props.navigation.navigate("Home", {
            allData: data,

        })

    }

    signup() {


        let data_to_send = {
            user_email: this.state.email,
            user_pass: this.state.pass,
            user_name: this.state.name
        };
        this.setState({ loading: true });
        // console.log(data_to_send)
        axios
            .post('https://zfactory.000webhostapp.com/CarApp/signup.php', data_to_send)
            .then((res) => {

                if (res.status == 200) {
                    //   alert(JSON.stringify(res.data))
                    if (res.data == 'email_found') {
                        alert('البريد الالكتروني مسجل من قبل')

                    } else if (res.data == 'error') {
                        alert('عذرا يرجي المحاوله في وقت لاحق')
                    } else {
                        if (res.data * 0 == 0) {

                            let user_data = {
                                user_email: this.state.email,
                                user_password: this.state.pass,
                                user_name: this.state.name,
                                user_id: res.data
                            }
                            this.savedata(user_data)
                            // this.props.navigation.navigate("Home")
                            // res.data -> have all data then make navigation
                            // this.props.navigation.navigate('GroupPage',
                            //   {
                            //     allData: res.data,
                            //     doctor_id: res.data.doctor_id
                            //   }
                            // );

                        }


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
            <View
                style={{
                    flex: 1,
                    backgroundColor: "#000",
                }}>
                <ScrollView>
                    <View style={{
                        height: '30%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginTop: 70
                    }}>
                        <Image
                            style={{
                                height: 70,
                                width: 70,
                            }}
                            source={require('../assets/user-icon.jpg')}
                        />
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            marginTop: 30,
                            color: "#686868"
                        }}>Create Account</Text>
                    </View>

                    <View style={{
                        width: '80%',
                        height: 60,
                        backgroundColor: "#121212",
                        flexDirection: 'row',
                        // justifyContent:'center'
                        // alignItems:'center'
                        alignSelf: 'center',
                        borderRadius: 10,
                        marginBottom: 5,
                        // marginTop: 100
                    }}>
                        <View
                            style={{
                                flex: .7,
                                backgroundColor: '#121212',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRightWidth: 1,
                                alignSelf: 'center'

                            }}
                        >

                            <TextInput
                                placeholder="User Name"
                                keyboardType="email-address"
                                placeholderTextColor={'#686868'}
                                value={this.state.name}
                                onChangeText={(text) => {
                                    this.setState({ name: text })
                                }
                                }
                                style={{
                                    // flex: 1,
                                    width: '100%',
                                    paddingRight: 35,
                                    // backgroundColor: '#FFF',
                                    marginLeft: 33,
                                    color: "#ddd",
                                    textAlign: 'left',
                                    fontSize: 17,

                                }}
                            />


                        </View>


                        <View
                            style={{
                                flex: .3,
                                backgroundColor: '#121212',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRightWidth: 1

                            }}
                        >
                            <Icons
                                name={"user"}
                                size={30}
                                color='#686868' />
                        </View>

                    </View>

                    <Text
                        style={{
                            color: "#f00",
                            textAlign: "center",
                            marginBottom: 10,

                        }}
                    >
                        {this.state.namerr}
                    </Text>
                    <View style={{
                        width: '80%',
                        height: 60,
                        backgroundColor: "#121212",
                        flexDirection: 'row',
                        // justifyContent:'center'
                        // alignItems:'center'
                        alignSelf: 'center',
                        borderRadius: 10,
                        marginBottom: 5,
                        // marginTop: 100
                    }}>
                        <View
                            style={{
                                flex: .7,
                                backgroundColor: '#121212',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRightWidth: 1,
                                alignSelf: 'center'

                            }}
                        >
                            <TextInput
                                placeholder="Email"
                                keyboardType="email-address"
                                placeholderTextColor={'#686868'}
                                value={this.state.email}
                                onChangeText={(text) => {
                                    this.setState({ email: text })
                                }
                                }
                                style={{
                                    // flex: 1,
                                    width: '100%',
                                    paddingRight: 35,
                                    // backgroundColor: '#FFF',
                                    marginLeft: 33,
                                    color: "#ddd",
                                    textAlign: 'left',
                                    fontSize: 17,

                                }}
                            />
                        </View>
                        <View
                            style={{
                                flex: .3,
                                backgroundColor: '#121212',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRightWidth: 1

                            }}
                        >
                            <Icons
                                name={"envelope-square"}
                                size={30}
                                color='#686868' />
                        </View>

                    </View>
                    <Text
                        style={{
                            color: "#f00",
                            textAlign: "center",
                            marginBottom: 10,

                        }}
                    >
                        {this.state.emailerr}
                    </Text>
                    <View style={{
                        width: '80%',
                        height: 60,
                        backgroundColor: "#121212",
                        flexDirection: 'row',
                        // justifyContent:'center'
                        // alignItems:'center'
                        alignSelf: 'center',
                        borderRadius: 10,
                        marginBottom: 5
                    }}>
                        <View
                            style={{
                                flex: .7,
                                // backgroundColor: '#121212',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRightWidth: 1,
                                alignSelf: 'center',
                                // borderTopLeftRadius:10

                            }}
                        >
                            <TextInput
                                placeholder="Password"
                                keyboardType="Password"
                                secureTextEntry={true}
                                placeholderTextColor={"#686868"}
                                value={this.state.pass}
                                onChangeText={(text) => {
                                    this.setState({ pass: text })
                                }
                                }
                                style={{
                                    // flex: 1,
                                    width: '100%',
                                    paddingRight: 35,
                                    // backgroundColor: '#FFF',
                                    marginLeft: 33,
                                    color: "#ddd",
                                    textAlign: 'left',
                                    fontSize: 17,

                                }}
                            />
                        </View>
                        <View
                            style={{
                                flex: .3,
                                backgroundColor: '#121212',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRightWidth: 1

                            }}
                        >
                            <Icons
                                name={"lock"}
                                size={30}
                                color='#686868' />
                        </View>

                    </View>
                    <Text
                        style={{
                            color: "#f00",
                            textAlign: "center",
                            marginBottom: 10,

                        }}
                    >
                        {this.state.passerr}
                    </Text>




                    <TouchableOpacity
                        onPress={() => {
                            // this.setState({ visibleModal_SignUp: true })

                            this.check()

                        }}
                        style={{
                            width: '80%',
                            height: 60,
                            backgroundColor: "#2d62cc",
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            borderRadius: 10,
                            marginBottom: 10,
                            marginTop: 30,
                            // padding: 10
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
                                color: "#ddd",
                            }}>Continue</Text>
                        )}
                    </TouchableOpacity>
                    <View style={{
                        height: 100,
                        width: 50,
                        // backgroundColor:"#ddd"
                    }}></View>
                </ScrollView>


            </View>

        )
    }
}