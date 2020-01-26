import { StyleSheet } from 'react-native'
import { 
  connectStyle, Toast
} from 'native-base';
import styleConstants from '../constants/styleConstants'

const typeSwitcher = (type: string) => {
  switch(type) {
    case 'success':
      return (
        successStyles.toast
      )
    case 'warn':
      return (
        warnStyles.toast
      )  
    case 'error':
      return (
        errorStyles.toast
      )
    default: 
      return (
        styles.toast
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
  toast: {
    backgroundColor: styleConstants.color.primary,
    borderRadius: 6,
    width: '94%',
    alignSelf: 'center',
    bottom: 16,
    shadowColor: styleConstants.color.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 2,
  }
})

const successStyles = StyleSheet.create({
  toast: {
    backgroundColor: styleConstants.color.secondary,
    borderRadius: 6,
    width: '94%',
    alignSelf: 'center',
    bottom: 16,
    shadowColor: styleConstants.color.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 2,
  }
})

const warnStyles = StyleSheet.create({
  toast: {
    backgroundColor: styleConstants.color.warn,
    borderRadius: 6,
    width: '94%',
    alignSelf: 'center',
    bottom: 16,
    shadowColor: styleConstants.color.black,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 2,
  }
})

const errorStyles = StyleSheet.create({
  toast: {
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