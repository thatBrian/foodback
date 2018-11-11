import React from 'react';
import { ScrollView, View, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';

const Signup = ({ router }) => (
    <View style={styles.container}>
        <ImageBackground resizeMode='cover' source={require('../src/img/Background.png')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.overlay}>
                <View style={styles.frame}>
                    <Text style={styles.title}>SIGN UP</Text>
                    <View style={{ flex: 1, width: "100%" }}>
                        <Text style={styles.sub}>PERSONAL INFO</Text>
                        <TextInput
                            placeholder="Name"
                            style={styles.input} />
                        <TextInput
                            placeholder="Sex"
                            style={styles.input} />
                        <TextInput
                            placeholder="Birthday"
                            style={styles.input} />
                        <View style={{ flexDirection: "row" }}>
                            <TextInput
                                placeholder="Height"
                                style={{ flex: 1 }} />
                            <TextInput
                                placeholder="Weight"
                                style={{ flex: 1 }} />
                        </View>
                    </View>
                    <View style={{ flex: 1, width: "100%" }}>
                        <Text style={styles.sub}>HEALTH INFO</Text>
                        <TextInput
                            placeholder="Allergies (nuts, seafood, etc.)"
                            style={styles.input} />
                        <TextInput
                            placeholder="Dietary Restrictions"
                            style={styles.input} />
                        <TextInput
                            placeholder="Medical Conditions"
                            style={styles.input} />
                    </View>
                    <TouchableOpacity 
                        onPress = {() => router.replace.Home({},{type:'fade'})}
                        style={styles.button}>
                        <Text style={{color:"black"}}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
        <KeyboardSpacer/>
    </View>
)
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
    },
    frame: {
        flex: 1,
        margin: 25,
        backgroundColor: "white",
        alignItems: "center",
        paddingHorizontal: 40,
    },
    title: {
        marginHorizontal: 30,
        fontWeight: "500",
        fontSize: 40,
        color: "black",
        marginBottom:30,
        letterSpacing:5,
    },
    sub: {
        color: "#6ad843",
        fontSize: 20,
        fontWeight: '300'
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        color: 'black',
    },
    button: {
        height:50,
        width: 300,
        marginBottom:20,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#6ad843", 

    },
})

export default Signup