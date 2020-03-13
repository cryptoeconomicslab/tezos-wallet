import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Spinner, connectStyle } from 'native-base'
import styleConstants from '../constants/styleConstants'

const Loading = () => {
  return (
    <Container style={styles.bg}>
      <Content style={styles.spinner}>
        <Spinner color="red" />
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: styleConstants.color.primaryBlack
  },
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  }
})

export default connectStyle('NativeBase', styles)(Loading)
