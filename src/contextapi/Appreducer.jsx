const state = (state, action) => {
  switch(action.type) {

    case 'DELETETRANSACTIONS':
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }

    case 'ADD_TRANSACTIONS':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }



    default: 
    return state;
  }
}
export default state;
