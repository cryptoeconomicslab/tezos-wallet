import React, {Component} from 'react'
import imageButtonHandler from '../constants/imageButtonHandler'
import styleConstants from '../constants/styleConstants'

import { 
  StyleSheet,
  ImageBackground, 
  TouchableHighlight
} from 'react-native'

import { 
  Text,
  connectStyle
} from 'native-base'

type Props = {
  title: string
  type: string
  action: () => void
}

class ImageButton extends Component<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      title, 
      type, 
      action } = this.props
    
    return (
      <TouchableHighlight onPress={action}>
        <ImageBackground 
          source={imageButtonHandler(type).bg} 
          style={styles.button}
        >
          <ImageBackground 
            source={imageButtonHandler(type).icon} 
            style={styles.buttonIcon}
          ></ImageBackground>
          <Text style={styles.label}>{title}</Text>
        </ImageBackground>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    margin: styleConstants.margin.middle,
    padding: styleConstants.margin.small,
    width: 372,
    height: 88
  },
  label: {
    color: styleConstants.color.textWhite,
    fontSize: styleConstants.fontSize.large,
    fontWeight: styleConstants.fontWeight.bold,
    marginLeft: 70,
    marginRight: 'auto'
  },
  buttonIcon:{
    width: 70,
    height: 70
  }
})

export default connectStyle('NativeBase', styles)(ImageButton)