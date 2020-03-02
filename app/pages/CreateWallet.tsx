import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  ImageBackground,
  AsyncStorage
} from 'react-native'
import Toastr from '../components/Toast'
import styleConstants from '../constants/styleConstants'
import Constants from 'expo-constants'
import {
  Button,
  Text,
  Left,
  Right,
  connectStyle
} from 'native-base'
import { setUserAddress } from '../redux/modules/address'
import { checkClientInitialized } from '../redux/modules/appStatus'

// type Props = {}

class CreateWallet extends Component<Props> {
  setSecretAddress = async () => {
    const { setUserAddress, checkClientInitialized } = this.props
    try {
      await AsyncStorage.setItem('secretKey', 'edskRpVqFG2FHo11aB9pzbnHBiPBWhNWdwtNyQSfEEhDf5jhFbAtNS41vg9as7LSYZv6rEbtJTwyyEg9cNDdcAkSr9Z7hfvquB')
      await AsyncStorage.setItem('myAddress', 'tz1X3xW1EcS48RQXSdrDTF6xESm933eq251f')
      await setUserAddress(await AsyncStorage.getItem('myAddress'))
      await Toastr.showToast('success', 'info', 2000)
      await checkClientInitialized()
    } catch (error) {
      Toastr.showToast(error, 'error', 2000)
      console.log(error)
    }
  }

  render() {
    const { navigation } = this.props

    return (
      <ImageBackground source={require('../assets/splash.png')} style={styles.bg}>
        <Button style={styles.button} onPress={this.setSecretAddress}>
          <Left />
          <Text style={styles.buttonText}>Create Wallet</Text>
          <Right />
        </Button>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    top: Constants.statusBarHeight + 5,
    width: '100%',
    height: '100%'
  },
  button: {
    width: '90%',
    height: 64,
    alignSelf: 'center',
    backgroundColor: styleConstants.color.primary,
    top: 440,
    borderRadius: 6
  },
  buttonText: {
    color: styleConstants.color.textWhite,
    fontSize: styleConstants.fontSize.large,
    textAlign: 'center'
  }
})

const mapStateToProps = state => ({
  address: state.reducer.address,
  appStatus: state.reducer.appStatus,
})

const mapDispatchToProps = {
  setUserAddress,
  checkClientInitialized
}

export default connect(mapStateToProps, mapDispatchToProps)(connectStyle('NativeBase', styles)(CreateWallet))
