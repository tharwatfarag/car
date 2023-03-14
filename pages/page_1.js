

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

export default class App extends React.Component {
    render() {
        return (
            <>
                <View style={{
                    flex: 3,
                    backgroundColor: "#000"
                }}>
                    <View style={{
                        flex: 2,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center'
                    }}>
                        <Image
                            style={{
                                height: 250,
                                width: 250,
                            }}
                            source={require('../assets/logo.png')}
                        />


                    </View>
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        <TouchableOpacity
                            onPress={() => {
                                // this.setState({ visibleModal_Login: true })
                                this.props.navigation.navigate("Login")
                            }}
                            style={{
                                width: '80%',
                                height: 60,
                                backgroundColor: "#2d62cc",
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                borderRadius: 10,
                                marginBottom: 20
                            }}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: "#ddd"
                            }}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                // this.setState({ visibleModal_SignUp: true })
                                this.props.navigation.navigate("SignUp")

                            }}
                            style={{
                                width: '80%',
                                height: 60,
                                backgroundColor: "#2d62cc",
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignSelf: 'center',
                                borderRadius: 10
                            }}
                        >
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: "#ddd"

                            }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </>
        )
    }
}