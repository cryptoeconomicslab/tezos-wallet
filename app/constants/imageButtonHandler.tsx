const imageButtonHandler = (type) => {
  switch (type) {
    case 'receive':
      return {
        bg: require('../assets/button_bg_transaction.png'), 
        icon: require('../assets/transaction_receive.png')
      }
    case 'deposit':
      return {
        bg: require('../assets/button_bg_deposit.png'), 
        icon: require('../assets/transaction_deposit.png')
      }
    case 'send':
      return {
        bg: require('../assets/button_bg_primary.png'), 
        icon: require('../assets/transaction_send.png')
      }
    default: 
      return {
        bg: require('../assets/button_bg_transaction.png'), 
        icon: require('../assets/transaction_receive.png')
      }
  }
}

export default imageButtonHandler