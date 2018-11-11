import React from 'react';
import{View, StyleSheet, ImageBackground, Text} from 'react-native';

const Signup =({router}) => (
    <View style={styles.container}>
        <ImageBackground resizeMode='cover' source={require('../src/img/Background.png')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.overlay}>
                <View style={styles.frame}>
                    <Text style={styles.title}>SIGN UP</Text>
                </View>
            </View>
        </ImageBackground>
    </View>
)
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
    },
    frame:{
        flex:1,
        margin:25,
        backgroundColor:"white",
        alignItems:"center"
    }
})

export default Signup