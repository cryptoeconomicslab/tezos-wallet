import React from 'react'
import { StyleSheet, Text, View, Dimensions, Alert, Button } from 'react-native'
import { Container } from 'native-base'
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'

import StackHeader from '../components/StackHeader'

import Constants from 'expo-constants'
import styleConstants from '../constants/styleConstants'

const { width } = Dimensions.get('window')
const qrSize = width * 0.7

type State = {
  hasCameraPermission: string
  scanned: boolean
}

class Qrcode extends React.Component<State> {
  state = {
    hasCameraPermission: null,
    scanned: false
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
      hasCameraPermission: status === 'granted',
      scanned: false
    })
  }

  cancelAlert() {
    const { navigation } = this.props
    navigation.goBack()
    // Alert.alert(
    //   '読み取り終了しますか？'
    // )
  }

  handleBarCodeScanned = (data) => {
    const { scanned } = this.props
    // navigation.navigate("ChildchainWallet");
    this.setState({ scanned: true })
    Alert.alert(data)
  }

  render() {
    const { hasCameraPermission, scanned } = this.state
    const { navigation } = this.props

    if(hasCameraPermission === null) {
      return <Text>Do you allow to access to camera?</Text>
    }

    if(hasCameraPermission === false) {
      return <Text>Can not access to camera.</Text>
    }

    return (
      <Container>
        <StackHeader title={'Scan QR code'} navigation={navigation} />
        <Container style={styles.bg}>
          <BarCodeScanner
            onBarCodeScanned={scan =>
              scanned ? undefined : this.handleBarCodeScanned(scan.data)
            }
            style={[StyleSheet.absoluteFill, styles.container]}
          >
            <View style={styles.layerTop}>
              <Text style={styles.description}>Scan QR code</Text>
            </View>
            <View style={styles.layerCenter}>
              <View style={styles.layerLeft} />
              <View style={styles.focused} />
              <View style={styles.layerRight} />
            </View>
            <View style={styles.layerBottom}>
              <Text onPress={() => this.cancelAlert()} style={styles.cancel}>
                Cancel
              </Text>
              {scanned && (
                <Button
                  title={'Tap to Scan Again'}
                  onPress={() => this.setState({ scanned: false })}
                />
              )}
            </View>
          </BarCodeScanner>
        </Container>
      </Container>
    )
  }
}

const opacity = 'rgba(0, 0, 0, .6)'
const styles = StyleSheet.create({
  bg: {
    top: Constants.statusBarHeight,
    backgroundColor: styleConstants.color.primaryBlack
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 1,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 1,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 4
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
    color: 'white'
  },
  cancel: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    marginTop: '30%'
  }
})

export default Qrcode
