import React from 'react';
import{View, StyleSheet, ImageBackground} from 'react-native';

const Home =({router}) => (
    <View style={styles.container}>
        <ImageBackground resizeMode='cover' source={require('../src/img/Background.png')} style={{ width: '100%', height: '100%' }}>
            
        </ImageBackground>
    </View>
)
const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default Home