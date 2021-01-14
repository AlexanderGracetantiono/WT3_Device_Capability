import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    TextInput,
    Keyboard
} from 'react-native'
import { Colors, Fonts, Metrics } from '../GlobalConfig'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Actions } from 'react-native-router-flux';

export default (props) => {
    const {
        title,
        isOutline,
        onClickAction,
        btnStyle,
        icon
    } = props
    useEffect(() => {
    }, [])
    return (
        <TouchableOpacity 
        onPress={onClickAction}
        style={[styles.btnContainer, btnStyle]}>
            <View style={styles.iconContainer}>
                <FontAwesome
                    size={25}
                    name={icon?icon:"star"}
                    color={Colors.WHITE}
                />
            </View>
            <Text style={styles.titleTextStyle}>{title?title:"No title"}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnContainer: {
        width: '100%',
        height: 50,
        backgroundColor: Colors.BLUE_DARK,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems:'center'
    },
    iconContainer: {
        width: 50,
        height: '100%',
        marginHorizontal: 5,
        justifyContent:'center',
        alignItems:'center'
    },
    titleTextStyle:{
        fontFamily:Fonts.INTER_BOLD,
        color:Colors.WHITE,
        fontSize:16
    }


})