import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View, Animated, useAnimatedValue } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { faker } from '@faker-js/faker';
import { BlurView } from '@react-native-community/blur';
const YoloPay = () => {
    const [freeze, setFreeze] = useState(true);
    // const opacity = useRef(new Animated.Value(1)).current;
    const opacity = useAnimatedValue(1);
    // Generate random card details once per mount
    const [cardData] = useState({
        number: faker.finance.creditCardNumber('#### #### #### ####'),
        expiry: faker.date.future().toLocaleDateString('en-GB', { month: '2-digit', year: '2-digit' })
    });

    // Animate freeze/unfreeze
    const toggleFreeze = () => {
        Animated.timing(opacity, {
            toValue: freeze ? 1 : 0.4,
            duration: 500,
            useNativeDriver: true,
        }).start();
        setFreeze(!freeze);
    };
    return (
        <>
            <StatusBar barStyle={'light-content'} backgroundColor={'#0D0D0D'} />
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.selectText}>
                        Select payment mode
                    </Text>
                    <Text style={styles.chooseText}>
                        Choose your preferred payment method to make payment.
                    </Text>
                    {/* btn view */}
                    <View style={styles.btnView}>
                        <TouchableOpacity
                            style={styles.btnStyle}>
                            <Text style={styles.btnText}>Pay</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.btnStyle, {
                                borderColor: '#A90808'
                            }]}
                        >
                            <Text style={[styles.btnText, { color: '#A90808' }]}>Card</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.chooseText}>Your digital debit card</Text>
                    {/* digital card  */}

                    {
                        freeze ? (
                            <View style={styles.digitalCard}>
                                <Animated.View style={[styles.cardView, { opacity }]}>
                                    <Image
                                        source={require('../Yolo/assets/images/DesignLayer.png')}
                                        resizeMode='cover'
                                        style={styles.imageStyle}
                                    />
                                    {freeze && (
                                        <BlurView
                                            style={styles.blurView}
                                            blurType='dark'
                                            blurAmount={10}
                                        />
                                    )}
                                </Animated.View>
                                <View style={styles.freezebtnView}>
                                    <TouchableOpacity
                                        onPress={toggleFreeze}
                                        style={styles.freezeBtn}>
                                        <Image
                                            source={require('../Yolo/assets/images/Freeze.png')}
                                            resizeMode='cotain'
                                            style={styles.freezeIcon}
                                        />
                                    </TouchableOpacity>
                                    <Text style={styles.freezeText}>Unfreeze</Text>
                                </View>
                            </View>
                        ) : (
                            <View style={styles.digitalCard}>
                                <Animated.View style={[styles.cardView, {
                                    opacity
                                }]}>
                                    <Image
                                        source={require('../Yolo/assets/images/DesignLayer.png')}
                                        resizeMode='cover'
                                        style={[styles.imageStyle, {
                                            opacity: 0.9
                                        }]}
                                    />
                                    {!freeze && (
                                        <BlurView
                                            style={styles.blurView}
                                            blurType='dark'
                                            blurAmount={10}
                                        />
                                    )}
                                    {/* Card Details */}
                                    <View style={styles.cardDetailsView}>
                                        <View style={styles.logoView}>
                                            <Image
                                                source={require('../Yolo/assets/images/YoloLogo.png')}
                                                resizeMode='cover'
                                                style={{
                                                    height: 25,
                                                    width: 80
                                                }}
                                            />
                                            <Image
                                                source={require('../Yolo/assets/images/YesBank.png')}
                                                resizeMode='cover'
                                                style={{
                                                    height: 30,
                                                    width: 80
                                                }}
                                            />

                                        </View>
                                        {/* Card Number + CVV  */}
                                        <View style={styles.cardDetailsCVV}>
                                            <Text style={styles.carcNumberText}>{cardData.number}</Text>
                                            <View style={styles.expiryView}>
                                                <View>
                                                    <Text style={styles.expiryText}>Expiry</Text>
                                                    <Text style={styles.expiryYear}>{cardData.expiry}</Text>
                                                </View>
                                                <View>
                                                    <Text style={styles.expiryText}>CVV</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                                        <Image
                                                            source={require('../Yolo/assets/images/Star.png')}
                                                            resizeMode='contain'
                                                            style={{
                                                                width: 50,
                                                                height: 30
                                                            }}
                                                        />
                                                        <TouchableOpacity>
                                                            <Feather name={'eye-off'} size={20} color={'#A90808'} />
                                                        </TouchableOpacity>
                                                    </View>

                                                </View>

                                            </View>

                                        </View>
                                        {/* copy details */}
                                        <View style={styles.copyDetails}>
                                            <FontAwesome5 name={'copy'} size={20} color={'#A90808'} />
                                            <Text style={styles.copyDetailsText}>Copy details</Text>
                                        </View>
                                        <View style={styles.rupayView}>
                                            <Image
                                                source={require('../Yolo/assets/images/Rupay.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width: 90,
                                                    height: 40,

                                                }}
                                            />
                                        </View>
                                    </View>
                                </Animated.View>
                                <View style={styles.freezebtnView}>
                                    <TouchableOpacity
                                        onPress={toggleFreeze}
                                        style={[styles.freezeBtn, {
                                            borderColor: '#fff'
                                        }]}>
                                        <Image
                                            source={require('../Yolo/assets/images/Freeze.png')}
                                            resizeMode='cover'
                                            style={[styles.freezeIcon, {
                                                tintColor: '#fff'
                                            }]}
                                        />
                                    </TouchableOpacity>
                                    <Text style={[styles.freezeText, {
                                        color: '#fff'
                                    }]}>Freeze</Text>
                                </View>
                            </View>
                        )
                    }


                </View>

            </SafeAreaView>
        </>
    )
}

export default YoloPay

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#0D0D0D'
    },
    contentContainer: {
        alignItems: 'center',
        width: '90%',
        gap: 5,
    },
    selectText: {
        width: 328,
        height: 36,
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: 24,
        color: '#fff',
        marginVertical: 20,
    },
    chooseText: {
        fontFamily: "Poppins",
        fontWeight: '400',
        fontSize: 15,
        color: '#fff',
        width: '90%',
        opacity: 0.5,
    },
    btnView: {
        flexDirection: 'row',
        gap: 10,
        width: '90%',
        marginVertical: 20
    },
    btnStyle: {
        width: 96,
        height: 40,
        gap: 8,
        borderRadius: 40,
        borderWidth: 1,
        padding: 8,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0,
        borderLeftWidth: 0.6,
        borderRightWidth: 0.6,
    },
    btnText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 16,
        color: '#fff',
    },
    digitalCard: {
        flexDirection: 'row',
        width: '100%',
        // justifyContent:'space-between',
        // alignItems:'center',
        gap: 20,
        marginTop: 20

    },
    cardView: {
        width: 250,
        height: 390,
        borderRadius: 16,
        marginLeft: 10,
        position: 'relative',
        overflow: 'hidden',

    },
    imageStyle: {
        width: 250,
        height: 390,
        borderRadius: 16,
        marginLeft: 10,
        // overflow: 'hidden',

    },
    freezeBtn: {
        width: 70,
        height: 70,
        borderRadius: 70,
        borderWidth: 0.4,
        borderColor: '#A90808',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: 0.1,
        borderRightWidth: 0.1,
        borderBottomWidth: 0,
    },
    freezeIcon: {
        width: 20,
        height: 22,
    },
    freezeText: {
        color: '#A90808',
    },
    freezebtnView: {
        gap: 10,
        top: 80,
        alignItems: 'center',
    },
    cardDetailsView: {
        position: 'absolute',
        alignItems: 'center',
    },
    logoView: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        gap: 60
    },
    cardDetailsCVV: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 10,



    },
    carcNumberText: {
        color: '#fff',
        width: '45%',
        fontSize: 35,
        margin: 10,

    },
    expiryText: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 10,
        color: '#fff',
        opacity: 0.5
    },
    expiryYear: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: 14,
        color: '#fff',

    },
    expiryView: {
        // top: 30,
        justifyContent: 'space-around'

    },
    copyDetailsText: {
        color: '#A90808',
        fontSize: 14,
        fontWeight: '400'
    },
    copyDetails: {
        flexDirection: 'row',
        width: '80%',
        gap: 10,
        alignItems: 'center',
    },
    rupayView: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginTop: 40
    },
    blurView:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 16,
        overflow: 'hidden',
    }

})