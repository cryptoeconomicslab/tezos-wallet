import React from 'react'
import { Image, StyleSheet, Clipboard } from 'react-native'
import { Container, Text, Icon, Button, Left } from 'native-base'
import qrcode from 'qrcode-generator'

import StackHeader from '../components/StackHeader'
import Toastr from '../components/Toast'
import Constants from 'expo-constants'
import styleConstants from '../constants/styleConstants'

class ShowQr extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      size: null,
      data: 'tz01u2ehbdiauh83easjfhads'
    }
    this.onLayout = this.onLayout.bind(this)
  }

  onLayout(e: { nativeEvent: { layout: { width: any } } }) {
    const { width } = e.nativeEvent.layout
    if (this.state.size !== width) {
      this.setState({ size: width })
    }
  }

  setClipbord = () => {
    const { data } = this.state
    Clipboard.setString(data)
    Toastr.showToast('address copied!', 'info', 2000)
  }

  render() {
    const { cellSize, margin, navigation } = this.props
    const size = 280

    const { data } = this.state
    const typeNumber = 4
    const errorCorrectionLevel = 'L'

    const QRCode = qrcode(typeNumber, errorCorrectionLevel)
    QRCode.addData(data)
    QRCode.make()

    let calculatedCellSize = cellSize
    if (typeof calculatedCellSize !== 'number' && typeof size === 'number') {
      calculatedCellSize =
        typeof margin === 'number'
          ? Math.round((size - margin * 2) / QRCode.getModuleCount())
          : Math.round(size / (QRCode.getModuleCount() + 8))
    }

    const uri = QRCode.createDataURL(calculatedCellSize, margin)
    return (
      <Container>
        <StackHeader navigation={navigation} title={'Child Chain Wallet'} />
        <Container style={styles.bg}>
          <Button style={styles.labelButton} onPress={this.setClipbord}>
            <Icon name="content-copy" type="MaterialCommunityIcons" />
            <Text uppercase={false}>{data}</Text>
          </Button>
          <Image
            key={uri}
            onLayout={this.onLayout}
            style={{
              width: size,
              aspectRatio: 1,
              alignSelf: 'center',
              margin: styleConstants.margin.middle
            }}
            source={{ uri }}
          />
        </Container>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    top: Constants.statusBarHeight,
    backgroundColor: styleConstants.color.primaryBlack
  },
  labelButton: {
    backgroundColor: styleConstants.color.secondaryBlack,
    marginTop: styleConstants.margin.large,
    marginBottom: styleConstants.margin.base
  }
})

export default ShowQr
