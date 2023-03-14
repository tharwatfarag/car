



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
     
} from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-community/async-storage';

export default class Home extends React.Component {

  async  componentDidMount() {
        let data = await AsyncStorage.getItem('auth')
        if(data == 'loged'){
            this.props.navigation.navigate("Home")
        }else{
            this.props.navigation.navigate("Page1")

        }
    }
    render() {
        return (
            <>
            </>
        )
    }

}