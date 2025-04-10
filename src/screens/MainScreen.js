import React, { useState, useRef } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { takePhoto } from '../redux/slicePhoto';
import {useDispatch} from "react-redux";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MainScreen({navigation}) {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [photo, setPhoto] = useState(null);
    const cameraRef = useRef(null);
    const dispatch = useDispatch();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.message}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    // Fonction pour basculer entre la caméra avant et arrière
    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    // Fonction pour prendre une photo
    const takePicture = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            setPhoto(photo.uri);
            // Sauvegarde la photo dans Redux avec un ID unique
            dispatch(takePhoto({
                id: Date.now(), // Utilise un timestamp comme ID unique
                uri: photo.uri,
            }));
        }
    };

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                {/* Supprimez l'ancien buttonContainer */}

                {/* Nouvelle barre de contrôle en bas */}
                <View style={styles.controlBar}>
                    {/* Bouton Flip à gauche */}
                    <TouchableOpacity
                        style={styles.flipButton}
                        onPress={toggleCameraFacing}
                    >
                        <Icon name="autorenew" size={28} color="white" />
                    </TouchableOpacity>

                    {/* Bouton de capture au centre */}
                    <TouchableOpacity
                        style={styles.captureButton}
                        onPress={takePicture}
                    >
                        <View style={styles.innerCircle} />
                    </TouchableOpacity>

                    {/* Miniature photo à droite */}
                    {photo ? (
                        <TouchableOpacity
                            style={styles.thumbnailButton}
                            onPress={() => navigation.navigate('GaleryScreen')}
                        >
                            <Image source={{ uri: photo }} style={styles.thumbnailImage} />
                        </TouchableOpacity>
                    ) : (
                        <View style={styles.placeholder} />
                    )}
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        flex: 1,
    },

    controlBar: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },

    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
        justifyContent: 'space-between', // Espace entre les boutons
    },
    button: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    photoButton: {
        position: 'absolute',
        bottom: 20,
        right: 20, // 20 pixels de la droite
        width: 80, // Largeur de la miniature
        height: 80, // Hauteur de la miniature
        borderRadius: 10, // Bords arrondis
        borderWidth: 2, // Bordure
        borderColor: 'white', // Couleur de la bordure
        overflow: 'hidden', // Pour que l'image respecte les bords arrondis
    },
    photoImage: {
        width: '100%',
        height: '100%',
    },

    captureButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 3,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },

    innerCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'white',
    },

    flipButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
    },

    thumbnailButton: {
        width: 50,
        height: 50,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
        overflow: 'hidden',
    },

    thumbnailImage: {
        width: '100%',
        height: '100%',
    },
    placeholder: {
        width: 50,
    },
});