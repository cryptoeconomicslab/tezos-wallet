import React from 'react'
import { Container } from 'native-base'
import QRCode from 'react-native-qrcode-svg'
import StackHeader from '../components/StackHeader'

class ShowQr extends React.Component {
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <StackHeader navigation={navigation} title={'Child Chain Wallet'} />
        <Container>
          <QRCode value="http://awesome.link.qr" />
        </Container>
      </Container>
    )
  }
}

export default ShowQr
