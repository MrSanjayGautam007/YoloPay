import React from 'react';
import { Dimensions, Image, View } from 'react-native';

const { width } = Dimensions.get('window');

const TabCurve = () => {
    return (
        <View style={{ width, height: 190, position: 'absolute', bottom: 0 }}>
            <Image
                source={require('../Yolo/assets/images/Rectangle29.png')}
                resizeMode="contain"
                style={{
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden',
                }}
            />
        </View>
    );
};

export default TabCurve;