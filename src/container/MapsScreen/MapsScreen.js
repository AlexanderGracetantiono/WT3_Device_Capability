import React, { useEffect, useRef, useState } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
} from "react-native";
import { Colors, Fonts, Metrics } from '../../GlobalConfig';
import CustomHeader from "../../components/CustomHeader";
import { Actions } from "react-native-router-flux";
import MapView from "react-native-maps";
export default (props) => {
    const [isLoading, setIsLoading] = useState()
    const [mapsRegion, setMapsRegion] = useState({})
    useEffect(() => {
        setIsLoading(true)
        setMapsRegion({})
    }, [])
    const redirectDetailRestaurant = (item) => () => {
        Actions.detailScreen({ item: item })
    }
   
    const onRegionChange = (region) => () => {
        Actions.detailScreen({ item: item })
    }
    return (
        <View style={styles.container}>
            <CustomHeader
                title="Google Maps"
                handleBackNavigation={true}
            />
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    onRegionChange={setMapsRegion}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    itemContainer: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        borderColor: Colors.GRAY,
        justifyContent: 'center'
    },
    itemTitleText: {
        fontFamily: Fonts.INTER_SEMI_BOLD,
        fontSize: 16,
        paddingLeft: Metrics.SAFE_AREA,
        color: Colors.BLUE_DARK
    }
})