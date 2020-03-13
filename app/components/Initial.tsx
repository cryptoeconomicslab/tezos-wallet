import { connect } from 'react-redux'
import { checkClientInitialized } from '../redux/modules/appStatus'
import { setUserAddress } from '../redux/modules/address'
import React, { useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { Text } from 'native-base'
import Loading from './Loading'
import CreateWallet from '../pages/CreateWallet'

const Initial = props => {
  useEffect(() => {
    async function fetchAddress() {
      try {
        await props.setUserAddress(await AsyncStorage.getItem('myAddress'))
        await props.checkClientInitialized()
      } catch (error) {
        console.log(error)
      }
    }
    fetchAddress()
  }, [])

  if (props.appStatus.status === 'INITIAL' && !props.address.address) {
    return <CreateWallet />
  } else if (props.appStatus.status === 'LOADED' || !props.address.address) {
    return props.children
  } else if (props.appStatus.status === 'ERROR') {
    return <Text>{props.appStatus.error.message}</Text>
  } else {
    return <Loading />
  }
}

const mapStateToProps = state => ({
  address: state.reducer.address,
  appStatus: state.reducer.appStatus
})

const mapDispatchToProps = {
  checkClientInitialized,
  setUserAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(Initial)
