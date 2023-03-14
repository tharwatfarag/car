

import * as React from 'react'

import {
    ScrollView,
    StatusBar,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Alert,
    Dimensions,
    ActivityIndicator
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
export default class NewPassword extends React.Component {

    constructor() {
        super()
        this.state = {

            newPass: '',
            rePass: '',
            passerr: '',
            loading: false,
            email: '',
            user_password: '',
        }
    }


    check() {

        var err = 0
        if (this.state.newPass.length == 0) {
            err++
            let txt = "ادخل كلمة السر"
            this.setState({ passerr: txt })
        } else {
            this.setState({ passerr: '' })

        }

        if (this.state.newPass != this.state.rePass) {
            err++
            alert('كلمة السر غير متطابقة')
        }

        if (err == 0) {
            this.reset_pass()
        }
    }

    reset_pass() {
        let email = this.props.route.params.email
        let data_to_send = {
            email: email,
            user_password: this.state.newPass
        };
        this.setState({ loading: true });
        console.log(data_to_send)
        axios
            .post('https://zfactory.000webhostapp.com/CarApp/reset_pass.php', data_to_send)
            .then((res) => {
                console.log(res.data)

                if (res.status == 200) {
                    if (res.data.trim() == 'success') {
                        // go next page
                        alert('تم تغيير كلمة السر بنجاح')
                        this.props.navigation.navigate("Login")

                    } else if (res.data.trim() == "error") {
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
                        backgroundColor: '#000',
                        flex: 1
                    }}
                >
                    <ScrollView>
                        <TouchableOpacity

                            onPress={() => {
                                this.props.navigation.goBack();

                            }}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                marginRight: 20,
                                marginTop: 30,
                                marginBottom: 50
                            }}>
                            <Text style={{ marginRight: 5, fontSize: 20, color: '#686868' }}>Back</Text>
                            <Icons name='chevron-left' color='#686868' size={30} />

                        </TouchableOpacity>


                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: "center",
                            marginTop: 100
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#686868' }}>New Password</Text>
                        </View>

                        <Text style={{ marginRight: 50, marginTop: 50, marginBottom: 5, color: '#686868' }}>Password</Text>
                        <View style={{
                            width: '80%',
                            height: 60,
                            backgroundColor: "#121212",
                            flexDirection: 'row',
                            // justifyContent:'center'
                            // alignItems:'center'
                            alignSelf: 'center',
                            borderRadius: 10,
                            // marginTop:50
                            marginBottom: 30
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
                                    placeholderTextColor={'#686868'}
                                    secureTextEntry={true}
                                    value={this.state.newPass}
                                    onChangeText={(text) => {
                                        this.setState({ newPass: text })
                                    }
                                    }
                                    style={{
                                        // flex: 1,
                                        width: '100%',
                                        paddingRight: 35,
                                        // backgroundColor: '#FFF',
                                        marginLeft: 33,

                                        textAlign: 'left',
                                        fontSize: 17,
                                        color: "#ddd"
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
                        <Text style={{ marginRight: 50, marginBottom: 5, color: '#686868' }}>Confirm Password</Text>

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
                                    placeholderTextColor={'#686868'}
                                    keyboardType="Password"
                                    secureTextEntry={true}
                                    value={this.state.rePass}
                                    onChangeText={(text) => {
                                        this.setState({ rePass: text })
                                    }
                                    }
                                    style={{
                                        // flex: 1,
                                        width: '100%',
                                        paddingRight: 35,
                                        // backgroundColor: '#FFF',
                                        marginLeft: 33,

                                        textAlign: 'left',
                                        fontSize: 17,
                                        color: "#ddd"

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
                                    color: "#ddd"
                                }}>Change Password</Text>
                            )}
                        </TouchableOpacity>
                    </ScrollView>
                </View>

            </>
        )
    }
}