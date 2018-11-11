import React from 'react';
import { View, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Text, Image} from 'react-native';

const Login = ({ router }) => (
    <View style={styles.container}>
        <ImageBackground resizeMode='cover' source={require('../src/img/Background.png')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.overlay}>
                <View style={styles.top}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={{ height:150, width:150}}source={require('../src/img/logo.png')}/>
                </View>
                <View style={styles.title}>
                    <Text style={{letterSpacing:5,fontSize:50,fontWeight:"500", color:"white"}}>food</Text>
                    <Text style={{letterSpacing:5,fontSize:50,fontWeight:"500", color:"#6ad843"}}>swap</Text>
                </View>
                </View>
                <View style={styles.bottom}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="white"
                        placeholder="Username"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="white"
                        placeholder="Password"
                        secureTextEntry
                        autoCorrect={false}
                    />
                    <TouchableOpacity 
                    onPress = {() => router.push.Home({},{type:'fade'})}
                    style={styles.buttonLogin}>
                        <Text style={{color:"black"}}>L O G I N</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress = {() => router.push.Signup({},{type:'fade'})}
                    style={styles.buttonSignup}>
                        <Text style={{color:"white"}}>S I G N  U P</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
    },
    top: {
        flex: 0.8
    },
    title:{
        height:60,
        flexDirection:"row",
        marginHorizontal:60,
        justifyContent:'center',
        marginBottom:20,
        
    },
    bottom: {
        flex: 1,
        marginHorizontal: 60,
    },
    input: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        color: 'white',
        marginBottom: 20,
    },
    buttonLogin:{
        marginTop:40,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"white",
        fontWeight: '100' 
    },
    buttonSignup:{
        marginTop:10,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"black",
        fontWeight: '100' 
    },
    logoContainer:{
        alignItems:'center', 
        justifyContent:'flex-end',
        flex:1,
    }
})



export default Login