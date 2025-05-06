import React from 'react';
import { View } from 'react-native';
import GaleryPhotos from '../components/GaleryPhotos';

const GaleryScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <GaleryPhotos />
        </View>
    );
};

export default GaleryScreen;