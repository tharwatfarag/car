

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
export default class ForgetPassword extends React.Component {



    constructor() {
        super()
        // بياخد البريد الالكتروني من اليوزر ويتشك عليه في السيرفر موجود ولا لا
        this.state = {
            emailerr: '',
            email: '',
            loading: false
        }
    }

    // فانكشن لو البريد الالكتروني غلط يظهرلك ان البريد غلط
    check() {
        let err = 0

        if (this.state.email.length == 0) {
            err++
            let txt = "ادخل البريد الالكتروني"
            this.setState({ emailerr: txt })
        } else {
            this.setState({ emailerr: '' })

        }

        if (err == 0) {
            this.send_code()
        }
    }
    send_code() {

        // الداتا اللي ببعتها للسيرفر من المستخدم
        let data_to_send = {


            email: this.state.email,
        };
        this.setState({ loading: true });
        // الريكوست
        axios
            .post('https://zfactory.000webhostapp.com/CarApp/send_code.php', data_to_send)
            .then((res) => {
                // لو الداتا اللي بتتبعت صح يتنقل علي صفحه ادخال الباسورد الجديده 
                if (res.status == 200) {
                    if (res.data.trim() == 'success') {
                        // go next page
                        this.props.navigation.navigate("NewPassword", {
                            email: this.state.email,
                        })
                        // لو مش موجود هيرد يقول ان المستخدم غير موجود
                    } else if (res.data.trim() == 'user_not_found') {
                        alert('هذا المستخدم غير موجود')
                    } else if (res.data.trim() == "error") {
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
                    {/* زرار الارجاع الي الخلف */}
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

                    <ScrollView>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: "center",
                            marginTop: 100
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#686868' }}>Password Recovery</Text>
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
                                {/* مكان ادخال البريد الالكتروني */}
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
                        <TouchableOpacity
                            onPress={() => {
                                // this.setState({ otp: true })
                                // Alert.alert("صفحه ارسال الكود")
                                // this.props.navigation.navigate("ResetPassword")
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
                                }}>Send Code</Text>
                            )}
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </>
        )
    }
}