// صفحه الدخول

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

} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class Login extends React.Component {

    constructor() {
        super()
        this.state = {
            name: '',
            emailerr: '',
            email: '',
            pass: '',
            passerr: '',
            loading: false
        }
    }

    // فانشكن مراجعه البريد الالكتروني وكلمه السر اذا كانت صحيحه او غلط
    check() {
        var err = 0
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
            this.signin()
        }
    }

    // تخزين بيانات اليوزر
    async savedata(data) {
        await AsyncStorage.setItem('userdata', JSON.stringify(data))
        await AsyncStorage.setItem('auth', 'loged')

        this.props.navigation.navigate("Home", {
            allData: data,

        })

    }
    signin() {

        if (this.state.email.length == 0 && this.state.pass.length == 0) {
            alert('من فضلك ادخل البيانات')
        } else {
            let data_to_send = {
                user_email: this.state.email,
                user_password: this.state.pass,

            };
            this.setState({ loading: true });
            //  ريكويست الدخول
            axios
                .post('https://zfactory.000webhostapp.com/CarApp/login.php', data_to_send)
                .then((res) => {
                    //  لو البريد او كلمه السر غلط هيرجع ان في حاجه غلط لو صح هيدخل
                    if (res.status == 200) {
                        if (res.data == 'user_not_found') {
                            alert('البريد الالكتروني او كلمه السر غير صحيحه')
                        } else if (res.data == 'error') {
                            alert('عذرا يرجي المحاوله في وقت لاحق')
                        } else {
                            this.setState({ emailerr: '', passerr: '', email: '', pass: '' })
                            this.savedata(res.data)


                            // res.data -> have all data then make navigation
                            // this.props.navigation.navigate('GroupPage',
                            //   {
                            //     allData: res.data,
                            //     doctor_id: res.data.doctor_id
                            //   }
                            // );


                        }
                    }
                    else {
                        alert('عذرا يرجي المحاوله في وقت لاحق')
                    }
                    this.setState({ loading: false });
                });
        }



    }
    render() {

        return (
            <>
                <View
                    style={{
                        backgroundColor: "#000",
                        flex: 3
                    }}>
                    <ScrollView>

                        <View

                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                marginTop: '40%'

                            }}>

                            <Icons
                                name={"sign-out-alt"}
                                size={70}
                                color='#686868' />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

                            <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, color: "#686868", }}>Log In</Text>


                        </View>

                        <View style={{
                            flex: 1
                        }}>
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
                                marginTop: 100
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
                                        placeholderTextColor={"#686868"}
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
                                borderRadius: 10
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
                                    // this.setState({ visibleModal_ForgetPassword: true })
                                    this.props.navigation.navigate("ForgetPassword")
                                    this.setState({ emailerr: '', passerr: '' })


                                }}
                                style={{
                                    marginRight: 40,
                                    marginTop: 10
                                }}


                            >
                                <Text style={{
                                    color: "#686868",
                                }}>Forget Password</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {

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
                                    marginTop: 30
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
                                    }}>Log In</Text>
                                )}

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.props.navigation.navigate("SignUp")
                                    this.setState({ emailerr: '', passerr: '' })


                                }}

                                style={{
                                    marginRight: 40,
                                    // marginTop: 10
                                }}


                            >
                                <Text style={{
                                    color: "#686868",
                                }}>I don't have account ? Sign up  </Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}