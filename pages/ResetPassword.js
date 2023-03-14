

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
import SMSVerifyCode from 'react-native-sms-verifycode'

export default class ResetPassword extends React.Component {
    render() {
        return (
            <>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: "#000"
                    }}
                >

                    {/* <View

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
                                fontWeight: "800"
                            }}
                        >
                            Code
                        </Text>
                    </View> */}
                    <TouchableOpacity
                        onPress={() => {
                            // this.setState({ malfunctionmodal: false })

                        }}
                        style={{
                            flexDirection: "row",
                            justifyContent: 'flex-end',
                            alignItems: "center",
                            marginRight: 10,
                            marginTop: 30,
                        }}
                    >


                        <Text
                            style={{
                                fontSize: 18,
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

                        <Text
                            style={{
                                fontSize: 23,
                                padding: 12,
                                fontWeight: "800",
                                color: "#686868"
                            }}
                        >
                            Enter Code
                        </Text>
                        <Text
                            style={{

                                fontWeight: "800",
                                color: "#686868"

                            }}
                        >
                            the code has been send to email
                        </Text>
                    </View>
                    <SMSVerifyCode
                        verifyCodeLength={4}
                        containerPaddingVertical={10}
                        containerPaddingHorizontal={50}
                        containerBackgroundColor={'#000'}

                        codeColor={'#fff'}
                        onInputCompleted={() => {
                            this.props.navigation.navigate("NewPassword")

                        }}

                    />
                    <TouchableOpacity
                        onPress={() => {
                            // this.setState({ visibleModal_NewPassword: true })

                        }}
                        style={{
                            width: '80%',
                            height: 60,
                            backgroundColor: "#2d62cc",
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                            borderRadius: 10,
                            marginTop: 20
                        }}
                    >
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: "#ddd"

                        }}>verify</Text>
                    </TouchableOpacity>
                </View>

            </>
        )
    }
}