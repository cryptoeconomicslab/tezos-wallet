const imageButtonHandler = type => {
  switch (type) {
    case 'tracsaction':
      return {
        bg: require('../assets/button_bg_transaction.png'),
        icon: require('../assets/transaction_receive.png')
      }
    case 'deposit':
      return {
        bg: require('../assets/button_bg_deposit.png'),
        icon: require('../assets/transaction_deposit.png')
      }
    case 'transfer':
      return {
        bg: require('../assets/button_bg_transfer.png'),
        icon: require('../assets/transaction_transfer.png')
      }
    default:
      return {
        bg: require('../assets/button_bg_transaction.png'),
        icon: require('../assets/transaction_receive.png')
      }
  }
}

export default imageButtonHandler
