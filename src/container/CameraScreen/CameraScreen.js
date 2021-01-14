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
import { RNCamera } from "react-native-camera";
import BarcodeMask from "react-native-barcode-mask";
export default (props) => {
    const [isLoading, setIsLoading] = useState()
    const [isBarcode, setIsBarcode] = useState(false)
    const [barcodeResult, setBarcodeResult] = useState(null)
    const [faceResult, setFaceResult] = useState(0)
    useEffect(() => {
        setIsLoading(true)
        setIsBarcode(false)
        setBarcodeResult(null)
        setFaceResult(0)
    }, [])
    const onBarcodeScanned = ({ data }) => {
        setFaceResult(0)
        console.log(data)
        setBarcodeResult(data)
    }
    const onFaceScanned = faceObj => {
        setBarcodeResult(null)
        console.log("FACE:", faceObj.faces.length)
        setFaceResult(faceObj.faces.length)
    }
    const scannerSwitcher = ({ data }) => {
        if (isBarcode) {
            setIsBarcode(false)
        } else {
            setIsBarcode(true)
        }
    }
    return (
        <View style={styles.container}>
            <CustomHeader
                title="React Native Camera"
                scannerSwitcher={true}
                isBarcodeScanner={isBarcode}
                onScannerSwitcherOn={scannerSwitcher}
                handleBackNavigation={true}
            />
            <RNCamera
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                onBarCodeRead={onBarcodeScanned}
                onFacesDetected={onFaceScanned}
                faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
                faceDetectionClassifications={RNCamera.Constants.FaceDetection.Classifications.all}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
            >
                {isBarcode ?
                    <BarcodeMask
                        width={Metrics.SCREEN_HEIGHT / 2}
                        height={Metrics.SCREEN_HEIGHT / 2}
                        edgeWidth={20}
                        edgeColor={Colors.RED_DARK}
                        showAnimatedLine
                        animatedLineColor={Colors.RED}
                        lineAnimationDuration={3000}
                        edgeBorderWidth={4} />
                    : null}
            </RNCamera>
            <View style={styles.ResultContainer}>
                {
                    isBarcode ?
                        <View style={styles.textContainer}>
                            <Text style={styles.textStyle}>
                                Barcode:
                            </Text>
                            <Text numberOfLines={1} style={styles.textStyle}>
                                {barcodeResult ? barcodeResult : "(Tidak ada)"}
                            </Text>
                        </View>
                        :
                        <View style={styles.textContainer}>
                            <Text style={styles.textStyle}>
                                Face:
                            </Text>
                            <Text numberOfLines={1} style={styles.textStyle}>
                                {faceResult > 0 ? ("Terdeteksi (" + faceResult + ") Wajah") : "(Tidak ada)"}
                            </Text>
                        </View>
                }
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    ResultContainer: {
        height: 50,
        width: '100%',
        backgroundColor: Colors.WHITE,
        justifyContent:'center'
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: Metrics.SAFE_AREA,
    },
    textStyle: {
        fontSize: 16,
        fontFamily: Fonts.INTER_MEDIUM,
        color: Colors.BLUE_DARK
    }
})