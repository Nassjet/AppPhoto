import { FlatList, View, Image, StyleSheet } from "react-native";
import DeleteButton from "./ButtonDelete";
import { useSelector, useDispatch } from 'react-redux';
import { deletePhoto } from '../redux/slicePhoto';

export default function GaleryPhotos() {
    const photos = useSelector((state) => state.photos.galery);
    const dispatch = useDispatch();

    const handleDeletePhoto = (id) => {
        dispatch(deletePhoto(id));
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={photos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.photoContainer}>
                        <Image source={{ uri: item.uri }} style={styles.photo} />
                        <DeleteButton onPress={() => handleDeletePhoto(item.id)} />
                    </View>
                )}
                numColumns={3}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    photoContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
});