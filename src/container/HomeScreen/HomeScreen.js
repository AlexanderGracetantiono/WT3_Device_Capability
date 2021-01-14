import React, { useEffect, useRef, useState } from "react";
import {
    View,
    StyleSheet,
    FlatList,
    Text,
    TouchableOpacity,
} from "react-native";
import { Colors, Fonts, Metrics } from '../../GlobalConfig';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import CustomHeader from "../../components/CustomHeader";
import { Actions } from "react-native-router-flux";
import CustomButton from "../../components/CustomButton";
export default (props) => {
    const [isLoading, setIsLoading] = useState()
    const [listButton, setListButton] = useState([])
    useEffect(() => {
        setIsLoading(true)
        setListButton([
            {
                id: 1,
                title: "Open Camera",
                icon: "camera",
                id_name: "camera"
            },
            {
                id: 2,
                title: "Open Maps",
                icon: "map",
                id_name: "map"
            },
            {
                id: 3,
                title: "Open Web View",
                icon: "globe",
                id_name: "globe"
            },
        ])
    }, [])

    const redirectAction = (item) => () => {
        switch (item) {
            case "camera":
                Actions.cameraScreen()
                break;
            case "map":
                Actions.mapsScreen()
                break;
            case "globe":
                Actions.webScreen()
                break;
            default:
                break;
        }
    }
    return (
        <View style={styles.container}>
            <CustomHeader
                title="React Native Compilation"
            />
            <View style={styles.listButtonContainer}>
                <FlatList
                    data={listButton}
                    numColumns={2}
                    extraData={[listButton]}
                    columnWrapperStyle={styles.flatlistRowStyle}
                    renderItem={({ item, index }) => {
                        return (
                            <CustomButton
                                title={item.title}
                                icon={item.icon}
                                btnStyle={styles.btnStyle}
                                onClickAction={redirectAction(item.id_name)}
                            />
                        )
                    }}
                    keyExtractor={(item, index) => {
                        return String(item.id)
                    }} />

            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
    },
    flatlistRowStyle:{
        justifyContent:'space-between'
    },
    listButtonContainer: {
        marginTop: 10,
        paddingHorizontal: Metrics.SAFE_AREA,
    },
    btnStyle: {
        width: 250,
        marginTop:10
    }
})