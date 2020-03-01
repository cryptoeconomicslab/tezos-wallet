import { connect } from 'react-redux'
import { checkClientInitialized } from '../redux/modules/appStatus'
import { setUserAddress } from '../redux/modules/address'
import React, { useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { Text } from 'native-base'
// import StartupModal from './StartupModal'
import CreateWallet from '../pages/CreateWallet'

const Initial = props => {
  useEffect(() => {
    async function fetchAddress() {
      try {
        await props.setUserAddress(await AsyncStorage.getItem('address'))
      } catch (error) {
        console.log(error)
      }
    }
    fetchAddress()
    props.checkClientInitialized()
  }, [])

  if (props.appStatus.status === 'INITIAL') {
    return <CreateWallet />
  } else if (props.appStatus.status === 'LOADED') {
    return props.children
  } else if (props.appStatus.status === 'ERROR') {
    return <Text>{props.appStatus.error.message}</Text>
  } else {
    return <Text>loading...</Text>
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
