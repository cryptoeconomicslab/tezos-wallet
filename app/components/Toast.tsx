import { StyleSheet } from 'react-native'
import { 
  connectStyle, Toast
} from 'native-base';
import styleConstants from '../constants/styleConstants'

const typeSwitcher = (type: string) => {
  switch(type) {
    case 'success':
      return (
        styles.success
      )
    case 'warn':
      return (
        styles.warn
      )  
    case 'error':
      return (
        styles.error
      )
    default: 
      return (
        styles.default
      )
  }
}

const Toastr = {
  showToast: (message, styleType = 'default', duration = 2500) => {
    Toast.show({
      text: message,
      duration,
      style: typeSwitcher(styleType),
      position: 'bottom',
      textStyle: { textAlign: 'center' },
    });
  },
};

const styles = StyleSheet.create({
  default: {
    backgroundColor: styleConstants.color.primary,
    borderRadius: 6,
    width: '94%',
    alignSelf: 'center',
    bottom: 16,
    shadowColor: styleConstants.color.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 2,
  },
  success: {
    backgroundColor: styleConstants.color.secondary,
    borderRadius: 6,
    width: '94%',
    alignSelf: 'center',
    bottom: 16,
    shadowColor: styleConstants.color.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 2,
  },
  warn: {
    backgroundColor: styleConstants.color.warn,
    borderRadius: 6,
    width: '94%',
    alignSelf: 'center',
    bottom: 16,
    shadowColor: styleConstants.color.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 2,
  },
  error: {
    backgroundColor: styleConstants.color.error,
    bottom: 16,
    borderRadius: 6,
    width: '94%',
    alignSelf: 'center',
    shadowColor: styleConstants.color.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 2,
  }
})

export default connectStyle('NativeBase', styles)(Toastr)