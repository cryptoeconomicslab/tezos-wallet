import React from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';

const { width } = Dimensions.get('window');
const qrSize = width * 0.7


class QRcode extends React.Component {

  state = {
    hasCameraPermission: null,
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted'
    });
  }

  cancelAlert() {
    Alert.alert(
      '読み取り終了しますか？'
    )
  }

  render() {

    const { hasCameraPermission } = this.state;

    if(hasCameraPermission === null) {
      return <Text>カメラにアクセスを許可しますか？</Text>
    }

    if(hasCameraPermission === false) {
      return <Text>カメラにアクセスできません</Text>
    }

    return (
      <BarCodeScanner
        onBarCodeRead={(scan) => alert(scan.data)}
        style={[StyleSheet.absoluteFill, styles.container]}
      >
        <View style={styles.layerTop} >
        <Text style={styles.description}>Scan QR code</Text>

        </View>
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={styles.focused} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom}>
        <Text
          onPress={() => this.cancelAlert()}
          style={styles.cancel}
        >
        Cancel
        </Text>

        </View>
      </BarCodeScanner>
    );
  }

  handleBarCodeScanned = ({type, data}) => {
    Alert.alert('barcode type:' + type + ' data: ' + data);
  }

}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  layerTop: {
    flex: 1,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row',

  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 8
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 1,
    backgroundColor: opacity
  },
  description: {
    fontSize: 25,
    marginTop: '40%',
    textAlign: 'center',
    color: 'white',
  },
  cancel: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginTop: '30%',

  },
});

export default QRcode
