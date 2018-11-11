import React from 'react';
import{Text,Image,Alert,View, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home =({router}) => (
    <View style={styles.container}>
        <ImageBackground resizeMode='cover' source={require('../src/img/Background.png')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.profile}>
                <View style={styles.profilePic}>
                <Image style={{height:150,width:150}} source={require('../src/img/profile.jpg')}/>
                </View>
            </View>
            <View style={styles.frame}>
                <View style={styles.nav}>
                    <TouchableOpacity
                        onPress = {() => router.replace.Login({},{type:'fade'})}
                    >
                        <Icon
                            name="exit-to-app"
                            color='#9e9e9e'
                            size={20}
                            style={{ margin: 15 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress ={() => 
                            Alert.alert(
                                'Settings',
                                'This is settings',
                                [
                                  {text: 'Lookings good!', onPress: () => console.log('Ask me later pressed')},
                                  {text: 'meh.', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                                ],
                                { cancelable: false }
                              )
                        }
                    >
                    <Icon
                            name="settings"
                            color='#9e9e9e'
                            size={20}
                            style={{ margin: 15 }}
                        />
                    </TouchableOpacity>
                </View>
                
            </View>
        </ImageBackground>
    </View>
)
const styles = StyleSheet.create({
    container:{
        flex:1
    }, 
    profilePic:{
        height:150,
        width:150,
        borderRadius:100,
        overflow:"hidden",
        elevation:10,
        position:"absolute",
        right:"33%",
        top:"50%",
    },
    profile:{
        height:80
    }, 
    frame:{
        flex:1,
        backgroundColor:"white",
        margin:30,
    },
    nav:{
        height:40,
        flexDirection:"row",
        justifyContent:"space-between"
    }
})

export default Home