import { connect } from 'react-redux'
import { checkClientInitialized } from '../redux/modules/appStatus'
import React, { useEffect } from 'react'
import { Text } from 'native-base'
// import StartupModal from './StartupModal'
import CreateWallet from '../pages/CreateWallet'

const Initial = props => {
  useEffect(() => {
    props.checkClientInitialized()
  }, [])

  if (props.appStatus.status === 'INITIAL' || !props.address.address) {
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
  checkClientInitialized
}

export default connect(mapStateToProps, mapDispatchToProps)(Initial)
