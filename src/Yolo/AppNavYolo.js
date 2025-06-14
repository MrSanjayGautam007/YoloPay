import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import YoloHome from './YoloHome'
import YoloPay from './YoloPay'
import YoloGenie from './YoloGenie'
import TabCurve from './TabCurve'

const AppNavYolo = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator

                initialRouteName='YoloPay'
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: styles.tabBarStyle,
                    tabBarActiveTintColor: '#000',
                    tabBarInactiveTintColor: '#ccc',
                    tabBarBackground: () => <TabCurve />
                }}
            >
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.iconContainer, {
                                top: 40,
                                opacity: focused ? 1 : 0.5
                            }]}>
                                <Image
                                    source={require('../Yolo/assets/images/Home.png')}
                                    style={{
                                        width: 28,
                                        height: 28,
                                        position: "absolute",
                                        tintColor: "#fff"
                                    }}
                                />
                            </View>
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{
                                color: "#fff",
                                fontSize: 10,
                                fontWeight: "bold",
                                top: 55,
                                opacity: focused ? 1 : 0.5
                            }}>Home</Text>
                        )
                    }}
                    name='Home' component={YoloHome} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.iconContainer, {
                                width: 80,
                                height: 80,
                                // borderColor: focused ? '#fff' : '#a29a98'
                                opacity: focused ? 1 : 0.5
                            }]}>
                                <ImageBackground style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 35,
                                    height: 35,

                                }}
                                    source={require('../Yolo/assets/images/QRCodeBG.png')}
                                >
                                    <Image
                                        source={require('../Yolo/assets/images/QRcode.png')}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            position: "absolute",
                                            tintColor: "#fff",
                                        }}
                                    />
                                </ImageBackground>
                            </View>
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{
                                color: "#fff",
                                fontSize: 10,
                                fontWeight: "bold",
                                top: 60,
                                opacity: focused ? 1 : 0.5

                            }}>Yolo Pay</Text>
                        )

                    }}
                    name='YoloPay' component={YoloPay} />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={[styles.iconContainer, { top: 40, opacity: focused ? 1 : 0.5 }]}>
                                <Image
                                    source={require('../Yolo/assets/images/Ginie.png')}
                                    style={{
                                        width: 28,
                                        height: 28,
                                        position: "absolute",
                                        tintColor: "#fff",
                                    }}
                                />
                            </View>
                        ),
                        tabBarLabel: ({ focused }) => (
                            <Text style={{
                                color: "#fff",
                                fontSize: 10,
                                fontWeight: "bold",
                                top: 55,
                                opacity: focused ? 1 : 0.5
                            }}>Ginie</Text>
                        )

                    }}

                    name='Ginie' component={YoloGenie} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavYolo

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 110,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 50,
        backgroundColor: 'transparent',
       borderTopWidth:0
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 30,
        borderWidth: 1.5,
        borderColor: '#fff',
        height: 45,
        width: 45,
        borderRadius: 40,
        borderBottomWidth: 0.05,
        borderLeftWidth: 0.6,
        borderRightWidth: 0.6,


    }
})