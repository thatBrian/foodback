import React from 'react';
import { Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import data from './Data';

const Search = ({ router }) => (
    <View style={styles.container}>
        <ImageBackground resizeMode='cover' source={require('../src/img/Background.png')} style={{ width: '100%', height: '100%' }}>
            <Swiper
                cards={data}
                renderCard={(card) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.imageContainer} >
                                <Image style={styles.image} source={card.img} />
                            </View>
                            <View style={styles.content} >
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.title}>{card.name}</Text>
                                    <Text style={styles.title2}>{card.store}</Text>
                                    <Text style={styles.title3}>{card.location}</Text>
                                </View>
                                <View style={{ flexDirection: "row", justifyContent:'space-between' }}>
                                    <View>
                                        <Text style={{ fontSize: 50 }}>{card.calories}g</Text>
                                        <Text style={{ fontSize: 20 }}>Calories</Text>
                                    </View>
                                    <View>
                                        <View style={{flex:1}}></View>
                                    <View style={{flexDirection:'row',marginBottom:30}}>
                                        <View style={{marginRight:20}}>
                                            <Text style={{ color: "red" }}>{card.distance}</Text>
                                            <Text style={{ color: "red" }}>MILE</Text>
                                        </View>
                                        <View>
                                            <Text style={{ color: "red" }}>{card.time}</Text>
                                            <Text style={{ color: "red" }}>Min</Text>
                                        </View>
                                    </View>
                                    </View>
                
                                </View>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{marginRight:30}}>
                                        <Text style={{ fontSize: 15 }}>{card.fat}g</Text>
                                        <Text style={{ fontSize: 10 }}>TOTAL FAT</Text>
                                    </View>
                                    <View style={{marginRight:30}}>
                                        <Text style={{ fontSize: 15 }}>{card.carbs}g</Text>
                                        <Text style={{ fontSize: 10 }}>CARBS</Text>
                                    </View>
                                    <View >
                                        <Text style={{ fontSize: 15 }}>{card.protein}g</Text>
                                        <Text style={{ fontSize: 10 }}>PROTEIN</Text>
                                    </View>
                                    <View style={{marginLeft: 30,flexDirection:"row"}}>
                                        <Text style={{ fontSize: 30}}>{card.percentage}%</Text>
                                        <Text style={{ fontSize: 15, alignSelf:"flex-end", marginBottom:5, marginLeft: 5}}>Match!</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={styles.button}>
                                <Text>$ {card.price}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }}
                backgroundColor='transparent'
                cardIndex={0}
                stackSize={3}>
            </Swiper>
        </ImageBackground>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        flex: 1,
        borderRadius: 10,
        justifyContent: "center",
        backgroundColor: "white",
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    },
    image: {
        height: "100%",
        width: "100%"
    },
    imageContainer: {
        flex: 3
    },
    content: {
        flex: 2,
        margin: 30,
    },
    button: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#6ad843",
        fontWeight: '100'
    },
    title: {
        fontSize: 30,
        color: "black",
        fontWeight: "500",
    },
    title2: {
        color: "#6ad843",
        fontWeight: "bold"
    },
    title3: {
        color: "#6ad843",
        fontStyle: 'italic'
    }
})

export default Search;