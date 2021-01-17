import  {React, createContext, useReducer } from 'react'
import Appreducer from './Appreducer';
import firebase from './firebase.jsx'
import 'firebase/database'
// Initial state
const initialState = {
    
    transactions : [

    ]
}




export const Globalcontext = createContext(initialState);

export const Globalprovider = ({ children }) => {
    const [state, dispatch] = useReducer(Appreducer, initialState);
    
    //  Actions

    // Delete Transactions
   const DeleteTransactions =  (id) =>  {
        dispatch({
            type: 'DELETETRANSACTIONS',
            payload: id
        })
    }
 
    // ADD Transactions
    const AddTransaction = (transactions) => {
        dispatch({
            type: 'ADD_TRANSACTIONS',
            payload: transactions,
        })
        firebase.database().ref('/').push(transactions);
    }
 

    return (
        <Globalcontext.Provider value={{
            transactions: state.transactions,
            DeleteTransactions,
            AddTransaction
        }}>
            {children}
        </Globalcontext.Provider>
    )
}
