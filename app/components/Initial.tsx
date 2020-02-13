import { connect } from 'react-redux'
import { checkClientInitialized } from '../store/appStatus'
import React, { useEffect } from 'react'
import {
  Text
} from 'native-base'
// import StartupModal from './StartupModal'

const Initial = props => {
  useEffect(() => {
    props.checkClientInitialized()
  }, [])

  if (props.appStatus.status === 'INITIAL') {
    return <Text>aaa</Text>
  } else if (props.appStatus.status === 'LOADED') {
    return props.children
  } else if (props.appStatus.status === 'ERROR') {
    return <Text>{'props.appStatus.error.message'}</Text>
  } else {
    return <Text>loading...</Text>
  }
}

const mapStateToProps = state => ({
  appStatus: state.appStatus
})

const mapDispatchToProps = {
  checkClientInitialized
}

export default connect(mapStateToProps, mapDispatchToProps)(Initial)
