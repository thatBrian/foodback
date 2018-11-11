import React from 'react';
import { Text, Image, Alert, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GoogleStaticMap from 'react-native-google-static-map';

const Home = ({ router }) => (
    <View style={styles.container}>
        <ImageBackground resizeMode='cover' source={require('../src/img/Background.png')} style={{ width: '100%', height: '100%' }}>
            <View style={styles.profile}>
                <View style={styles.profilePic}>
                    <Image style={{ height: 150, width: 150 }} source={require('../src/img/profile.jpg')} />
                </View>
            </View>
            <View style={styles.frame}>
                <View style={styles.nav}>
                    <TouchableOpacity
                        onPress={() => router.replace.Login({}, { type: 'fade' })}
                    >
                        <Icon
                            name="exit-to-app"
                            color='#9e9e9e'
                            size={20}
                            style={{ margin: 15 }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() =>
                            Alert.alert(
                                'Settings',
                                'This is settings',
                                [
                                    { text: 'Lookings good!', onPress: () => console.log('Ask me later pressed') },
                                    { text: 'meh.', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                    { text: 'OK', onPress: () => console.log('OK Pressed') },
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
                <View style={styles.contentContainer}>
                    <Text style={{ fontSize: 10 }}>November 3rd, Sunday</Text>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: "400" }}>Your Recommended Daily Intake</Text>
                        <View style={{ flex: 1, height: 2, color: "black" }}></View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ marginTop: 20, fontSize: 15, fontWeight: '500', }}>CALORIES</Text>
                        <Text style={{ marginTop: 20, fontSize: 15, fontWeight: '500', }}>1980 units</Text>
                    </View>
                    <View style={{ height: 2, width: "70%", backgroundColor: "#6ad843" }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.data}>PROTEIN</Text>
                        <Text style={styles.data}>50g</Text>
                    </View>
                    <View style={{ height: 2, width: "65%", backgroundColor: "#6ad843" }}></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.data}>FAT</Text>
                        <Text style={styles.data}>65g</Text>
                    </View>
                    <View style={{ height: 2, width: "23%", backgroundColor: "#6ad843" }}></View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.data}>CARBOHYDRATES</Text>
                        <Text style={styles.data}>300g</Text>
                    </View>
                    <View style={{ height: 2, width: "89%", backgroundColor: "#6ad843" }}></View>

                    <View style={{ flex: 1 }}>
                        <GoogleStaticMap
                            style={styles.map}
                            latitude={'40.7257223'}
                            longitude={'-74.0072722'}
                            zoom={13}
                            size={{ width: 300, height: 550 }}
                            apiKey={'AIzaSyBeWcVkl8kxqTdbvNjQfAtvJ0SlfBeXSEQ'}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => router.push.Search({}, { type: 'fade' })}
                        style={styles.button}>
                        <Text>Let's Eat!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    </View>
)
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profilePic: {
        height: 150,
        width: 150,
        borderRadius: 100,
        overflow: "hidden",
        elevation: 10,
        position: "absolute",
        right: "33%",
        top: "50%",
    },
    profile: {
        height: 80
    },
    frame: {
        flex: 1,
        backgroundColor: "white",
        margin: 30,
    },
    nav: {
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        marginTop: 40,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6ad843",
        fontWeight: '100',
        marginBottom: 20,
    },
    contentContainer: {
        marginTop: 50,
        flex: 1,
        marginHorizontal: 20,
    },
    data: {
        marginTop: 20,
        fontSize: 10,
        fontWeight: '500',
    },
    map: {
        marginTop:10,
        flex: 1

    }
})

export default Home