

// import React, { Component } from 'react';
// import {


//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
//   Modal,
//   TextInput,
//   Alert,
// } from 'react-native';
// import Icons from 'react-native-vector-icons/FontAwesome5';

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//       visibleModal_Login: false,
//       visibleModal_SignUp: false,
//       visibleModal_ForgetPassword: true,
//       visibleModal_NewPassword: true,
//     }

//   }
//   render() {

//     return (
//       <>
//         <View style={{
//           flex: 3,
//           backgroundColor: "#1e1e1e"
//         }}>
//           <View style={{
//             flex: 2,
//             justifyContent: 'center',
//             alignItems: 'center',
//             alignSelf: 'center'
//           }}>
//             <Image
//               style={{
//                 height: 250,
//                 width: 250,
//               }}
//               source={require('./assets/logo.png')}
//             />


//           </View>
//           <View
//             style={{
//               flex: 1
//             }}
//           >
//             <TouchableOpacity
//               onPress={() => {
//                 this.setState({ visibleModal_Login: true })
//               }}
//               style={{
//                 width: '80%',
//                 height: 60,
//                 backgroundColor: "#2d62cc",
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 alignSelf: 'center',
//                 borderRadius: 10,
//                 marginBottom: 20
//               }}
//             >
//               <Text style={{
//                 fontSize: 20,
//                 fontWeight: 'bold'
//               }}>Log In</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={() => {
//                 this.setState({ visibleModal_SignUp: true })
//               }}
//               style={{
//                 width: '80%',
//                 height: 60,
//                 backgroundColor: "#2d62cc",
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 alignSelf: 'center',
//                 borderRadius: 10
//               }}
//             >
//               <Text style={{
//                 fontSize: 20,
//                 fontWeight: 'bold'
//               }}>Sign Up</Text>
//             </TouchableOpacity>
//           </View>
//         </View>



//         <Modal
//           visible={this.state.visibleModal_Login}

//           onRequestClose={() => {
//             this.setState({ visibleModal_Login: false })
//           }}>
//           <View
//             style={{
//               backgroundColor: "#1e1e1e",
//               flex: 3
//             }}>
//             <ScrollView>

//               <TouchableOpacity
//                 onPress={() => {
//                   this.setState({ visibleModal_Login: false })
//                 }}
//                 style={{
//                   flex: 1,
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   alignSelf: 'center',
//                   marginTop: '40%'

//                 }}>

//                 <Icons
//                   name={"sign-out-alt"}
//                   size={70}
//                   color='#fff' />
//               </TouchableOpacity>
//               <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>

//                 <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Log In</Text>


//               </View>

//               <View style={{
//                 flex: 1
//               }}>
//                 <View style={{
//                   width: '80%',
//                   height: 60,
//                   backgroundColor: "#121212",
//                   flexDirection: 'row',
//                   // justifyContent:'center'
//                   // alignItems:'center'
//                   alignSelf: 'center',
//                   borderRadius: 10,
//                   marginBottom: 20,
//                   marginTop: 100
//                 }}>
//                   <View
//                     style={{
//                       flex: .7,
//                       backgroundColor: '#121212',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       borderRightWidth: 1,
//                       alignSelf: 'center'

//                     }}
//                   >
//                     <TextInput
//                       placeholder="Email"
//                       keyboardType="email-address"

//                       style={{
//                         // flex: 1,
//                         width: '100%',
//                         paddingRight: 35,
//                         // backgroundColor: '#FFF',
//                         marginLeft: 33,

//                         textAlign: 'left',
//                         fontSize: 17,

//                       }}
//                     />
//                   </View>
//                   <View
//                     style={{
//                       flex: .3,
//                       backgroundColor: '#121212',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       borderRightWidth: 1

//                     }}
//                   >
//                     <Icons
//                       name={"envelope-square"}
//                       size={30}
//                       color='#fff' />
//                   </View>

//                 </View>

//                 <View style={{
//                   width: '80%',
//                   height: 60,
//                   backgroundColor: "#121212",
//                   flexDirection: 'row',
//                   // justifyContent:'center'
//                   // alignItems:'center'
//                   alignSelf: 'center',
//                   borderRadius: 10
//                 }}>
//                   <View
//                     style={{
//                       flex: .7,
//                       // backgroundColor: '#121212',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       borderRightWidth: 1,
//                       alignSelf: 'center',
//                       // borderTopLeftRadius:10

//                     }}
//                   >
//                     <TextInput
//                       placeholder="Password"
//                       keyboardType="Password"
//                       secureTextEntry={true}
//                       style={{
//                         // flex: 1,
//                         width: '100%',
//                         paddingRight: 35,
//                         // backgroundColor: '#FFF',
//                         marginLeft: 33,

//                         textAlign: 'left',
//                         fontSize: 17,

//                       }}
//                     />
//                   </View>
//                   <View
//                     style={{
//                       flex: .3,
//                       backgroundColor: '#121212',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       borderRightWidth: 1

//                     }}
//                   >
//                     <Icons
//                       name={"lock"}
//                       size={30}
//                       color='#fff' />
//                   </View>

//                 </View>
//                 <TouchableOpacity

//                   onPress={() => {
//                     this.setState({ visibleModal_ForgetPassword: true })
//                   }}
//                   style={{
//                     marginRight: 40,
//                     marginTop: 10
//                   }}


//                 >
//                   <Text>Forget Password</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity
//                   onPress={() => {
//                     this.setState({ visibleModal_SignUp: true })
//                   }}
//                   style={{
//                     width: '80%',
//                     height: 60,
//                     backgroundColor: "#2d62cc",
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     alignSelf: 'center',
//                     borderRadius: 10,
//                     marginBottom: 10,
//                     marginTop: 30
//                   }}
//                 >
//                   <Text style={{
//                     fontSize: 20,
//                     fontWeight: 'bold'
//                   }}>Log In</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={{
//                   marginRight: 40,
//                   // marginTop: 10
//                 }}


//                 >
//                   <Text>I don't have account ? Sign up  </Text>
//                 </TouchableOpacity>

//               </View>
//             </ScrollView>
//           </View>
//         </Modal>



//         <Modal
//           visible={this.state.visibleModal_SignUp}

//           onRequestClose={() => {
//             this.setState({ visibleModal_SignUp: false })
//           }}>


//           <View
//             style={{
//               flex: 1,
//               backgroundColor: "#1e1e1e",
//             }}>
//             <View style={{
//               height: '30%',
//               width: '100%',
//               justifyContent: 'center',
//               alignItems: 'center',
//               alignSelf: 'center',
//               marginTop: 70
//             }}>
//               <Image
//                 style={{
//                   height: 70,
//                   width: 70,
//                 }}
//                 source={require('./assets/user-icon.jpg')}
//               />
//               <Text style={{
//                 fontSize: 20,
//                 fontWeight: 'bold',
//                 marginTop: 30
//               }}>Create Account</Text>
//             </View>

//             <View style={{
//               width: '80%',
//               height: 60,
//               backgroundColor: "#121212",
//               flexDirection: 'row',
//               // justifyContent:'center'
//               // alignItems:'center'
//               alignSelf: 'center',
//               borderRadius: 10,
//               marginBottom: 20,
//               marginTop: 100
//             }}>
//               <View
//                 style={{
//                   flex: .7,
//                   backgroundColor: '#121212',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRightWidth: 1,
//                   alignSelf: 'center'

//                 }}
//               >
//                 <TextInput
//                   placeholder="User Name"
//                   keyboardType="email-address"

//                   style={{
//                     // flex: 1,
//                     width: '100%',
//                     paddingRight: 35,
//                     // backgroundColor: '#FFF',
//                     marginLeft: 33,

//                     textAlign: 'left',
//                     fontSize: 17,

//                   }}
//                 />
//               </View>
//               <View
//                 style={{
//                   flex: .3,
//                   backgroundColor: '#121212',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRightWidth: 1

//                 }}
//               >
//                 <Icons
//                   name={"user"}
//                   size={30}
//                   color='#fff' />
//               </View>

//             </View>


//             <View style={{
//               width: '80%',
//               height: 60,
//               backgroundColor: "#121212",
//               flexDirection: 'row',
//               // justifyContent:'center'
//               // alignItems:'center'
//               alignSelf: 'center',
//               borderRadius: 10,
//               marginBottom: 20,
//               // marginTop: 100
//             }}>
//               <View
//                 style={{
//                   flex: .7,
//                   backgroundColor: '#121212',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRightWidth: 1,
//                   alignSelf: 'center'

//                 }}
//               >
//                 <TextInput
//                   placeholder="Email"
//                   keyboardType="email-address"

//                   style={{
//                     // flex: 1,
//                     width: '100%',
//                     paddingRight: 35,
//                     // backgroundColor: '#FFF',
//                     marginLeft: 33,

//                     textAlign: 'left',
//                     fontSize: 17,

//                   }}
//                 />
//               </View>
//               <View
//                 style={{
//                   flex: .3,
//                   backgroundColor: '#121212',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRightWidth: 1

//                 }}
//               >
//                 <Icons
//                   name={"envelope-square"}
//                   size={30}
//                   color='#fff' />
//               </View>

//             </View>

//             <TouchableOpacity
//               onPress={() => {
//                 // this.setState({ visibleModal_SignUp: true })
//               }}
//               style={{
//                 width: '80%',
//                 height: 60,
//                 backgroundColor: "#2d62cc",
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 alignSelf: 'center',
//                 borderRadius: 10,
//                 marginBottom: 10,
//                 marginTop: 30
//               }}
//             >
//               <Text style={{
//                 fontSize: 20,
//                 fontWeight: 'bold'
//               }}>Continue</Text>
//             </TouchableOpacity>


//           </View>
//         </Modal>




//         <Modal
//           visible={this.state.visibleModal_ForgetPassword}

//           onRequestClose={() => {
//             this.setState({ visibleModal_ForgetPassword: false })
//           }}>


//           <View
//             style={{
//               backgroundColor: '#1e1e1e',
//               flex: 1
//             }}
//           >

//             <TouchableOpacity

//               onPress={() => {
//                 this.setState({ visibleModal_ForgetPassword: false })

//               }}
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'flex-end',
//                 marginRight: 20,
//                 marginTop: 30,
//                 marginBottom: 50
//               }}>
//               <Text style={{ marginRight: 5, fontSize: 20 }}>Back</Text>
//               <Icons name='chevron-left' size={30} />

//             </TouchableOpacity>


//             <View style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               alignSelf: "center",
//               marginTop: 100
//             }}>
//               <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Password Recovery</Text>
//             </View>

//             <View style={{
//               width: '80%',
//               height: 60,
//               backgroundColor: "#121212",
//               flexDirection: 'row',
//               // justifyContent:'center'
//               // alignItems:'center'
//               alignSelf: 'center',
//               borderRadius: 10,
//               marginBottom: 20,
//               marginTop: 100
//             }}>
//               <View
//                 style={{
//                   flex: .7,
//                   backgroundColor: '#121212',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRightWidth: 1,
//                   alignSelf: 'center'

//                 }}
//               >
//                 <TextInput
//                   placeholder="Email"
//                   keyboardType="email-address"

//                   style={{
//                     // flex: 1,
//                     width: '100%',
//                     paddingRight: 35,
//                     // backgroundColor: '#FFF',
//                     marginLeft: 33,

//                     textAlign: 'left',
//                     fontSize: 17,

//                   }}
//                 />
//               </View>
//               <View
//                 style={{
//                   flex: .3,
//                   backgroundColor: '#121212',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRightWidth: 1

//                 }}
//               >
//                 <Icons
//                   name={"envelope-square"}
//                   size={30}
//                   color='#fff' />
//               </View>

//             </View>

//             <TouchableOpacity
//               onPress={() => {
//                 this.setState({ visibleModal_NewPassword: true })
//                 // Alert.alert("صفحه ارسال الكود")
//               }}
//               style={{
//                 width: '80%',
//                 height: 60,
//                 backgroundColor: "#2d62cc",
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 alignSelf: 'center',
//                 borderRadius: 10,
//                 marginBottom: 10,
//                 marginTop: 30
//               }}
//             >
//               <Text style={{
//                 fontSize: 20,
//                 fontWeight: 'bold'
//               }}>Send Code</Text>
//             </TouchableOpacity>

//           </View>
//         </Modal>


//         <Modal
//           visible={this.state.visibleModal_NewPassword}

//           onRequestClose={() => {
//             this.setState({ visibleModal_NewPassword: false })
//           }}>


//           <View
//             style={{
//               backgroundColor: '#1e1e1e',
//               flex: 1
//             }}
//           >

//             <TouchableOpacity

//               onPress={() => {
//                 this.setState({ visibleModal_NewPassword: false })

//               }}
//               style={{
//                 flexDirection: 'row',
//                 justifyContent: 'flex-end',
//                 marginRight: 20,
//                 marginTop: 30,
//                 marginBottom: 50
//               }}>
//               <Text style={{ marginRight: 5, fontSize: 20 }}>Back</Text>
//               <Icons name='chevron-left' size={30} />

//             </TouchableOpacity>


//             <View style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               alignSelf: "center",
//               marginTop: 100
//             }}>
//               <Text style={{ fontSize: 20, fontWeight: 'bold' }}>New Password</Text>
//             </View>

//             <Text style={{ marginRight: 50, marginTop: 50, marginBottom: 5 }}>Password</Text>
//             <View style={{
//               width: '80%',
//               height: 60,
//               backgroundColor: "#121212",
//               flexDirection: 'row',
//               // justifyContent:'center'
//               // alignItems:'center'
//               alignSelf: 'center',
//               borderRadius: 10,
//               // marginTop:50
//               marginBottom: 30
//             }}>
//               <View
//                 style={{
//                   flex: .7,
//                   // backgroundColor: '#121212',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRightWidth: 1,
//                   alignSelf: 'center',
//                   // borderTopLeftRadius:10

//                 }}
//               >
//                 <TextInput
//                   placeholder="Password"
//                   keyboardType="Password"
//                   secureTextEntry={true}
//                   style={{
//                     // flex: 1,
//                     width: '100%',
//                     paddingRight: 35,
//                     // backgroundColor: '#FFF',
//                     marginLeft: 33,

//                     textAlign: 'left',
//                     fontSize: 17,

//                   }}
//                 />
//               </View>
//               <View
//                 style={{
//                   flex: .3,
//                   backgroundColor: '#121212',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRightWidth: 1

//                 }}
//               >
//                 <Icons
//                   name={"lock"}
//                   size={30}
//                   color='#fff' />
//               </View>

//             </View>

//             <Text style={{ marginRight: 50, marginBottom: 5 }}>Confirm Password</Text>

//             <View style={{
//               width: '80%',
//               height: 60,
//               backgroundColor: "#121212",
//               flexDirection: 'row',
//               // justifyContent:'center'
//               // alignItems:'center'
//               alignSelf: 'center',
//               borderRadius: 10
//             }}>
//               <View
//                 style={{
//                   flex: .7,
//                   // backgroundColor: '#121212',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRightWidth: 1,
//                   alignSelf: 'center',
//                   // borderTopLeftRadius:10

//                 }}
//               >
//                 <TextInput
//                   placeholder="Password"
//                   keyboardType="Password"
//                   secureTextEntry={true}
//                   style={{
//                     // flex: 1,
//                     width: '100%',
//                     paddingRight: 35,
//                     // backgroundColor: '#FFF',
//                     marginLeft: 33,

//                     textAlign: 'left',
//                     fontSize: 17,

//                   }}
//                 />
//               </View>
//               <View
//                 style={{
//                   flex: .3,
//                   backgroundColor: '#121212',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderRightWidth: 1

//                 }}
//               >
//                 <Icons
//                   name={"lock"}
//                   size={30}
//                   color='#fff' />
//               </View>

//             </View>

//             <TouchableOpacity
//               onPress={() => {
//                 this.setState({ visibleModal_ResendCode: true })
//                 // Alert.alert("صفحه ارسال الكود")
//               }}
//               style={{
//                 width: '80%',
//                 height: 60,
//                 backgroundColor: "#2d62cc",
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 alignSelf: 'center',
//                 borderRadius: 10,
//                 marginBottom: 10,
//                 marginTop: 30
//               }}
//             >
//               <Text style={{
//                 fontSize: 20,
//                 fontWeight: 'bold'
//               }}>Change Password</Text>
//             </TouchableOpacity>

//           </View>
//         </Modal>


//       </>

//     )
//   }
// }

// const styles = StyleSheet.create({

// });






































import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Page1 from "./pages/page_1";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import NewPassword from './pages/NewPassword';
import Home from './pages/Home';
import Info from './pages/Info';
import Petrol from './pages/Petrol';
import Malfunction from './pages/Malfunction';
import Winch from './pages/Winch';
import Switch from './pages/Switch';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Switch"
      >
        <Stack.Screen name='Switch' component={Switch} />

        <Stack.Screen name='Page1' component={Page1} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} />
        <Stack.Screen name='NewPassword' component={NewPassword} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Info' component={Info} />
        <Stack.Screen name='Petrol' component={Petrol} />
        <Stack.Screen name='Malfunction' component={Malfunction} />
        <Stack.Screen name='Winch' component={Winch} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App