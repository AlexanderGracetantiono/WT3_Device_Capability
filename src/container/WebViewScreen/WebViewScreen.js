import React, { useEffect, useRef, useState } from "react";
import {
    View,
    StyleSheet,
} from "react-native";
import { Colors, Fonts, Metrics } from '../../GlobalConfig';
import WebView from "react-native-webview";
import CustomHeader from "../../components/CustomHeader";
export default (props) => {
    useEffect(() => {
    }, [])
    return (
        <View style={styles.container}>
            <CustomHeader
                handleBackNavigation={true}
                title="Your Food Book"
            />
            <WebView
                style={{ flex: 1 }}
                source={{ uri: "https://yourfoodbook.000webhostapp.com/" }}
            />
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