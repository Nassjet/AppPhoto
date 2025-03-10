import { FlatList, View } from "react-native";
import DeleteButton from "./ButtonDelete";

export default function GaleryPhotos() {
    return (
        <View>
            <FlatList
            data={photos}
            // keyExtractor={}
            // renderItem={}
            numColumns={3}
            >
            </FlatList>
            <DeleteButton/>
        </View>
    )
}