import React, { useContext } from 'react';
import '../history/history.css';
import {Globalcontext} from '../../contextapi/contextapi'
import firebase from '../../contextapi/firebase'
import 'firebase/database'

function History() {
    // let totaldata = [];
    // firebase.database().ref('/').on('child_added', function (data) {
    //         totaldata = data.val();
    //         console.log(totaldata.amount)
           
    // })

    
    
     const transactions = useContext(Globalcontext);
     const amount = transactions.transactions.map(transaction =>
        transaction.amount
        )
     const sign = amount < 0 ? '-' : '+';

     const {DeleteTransactions} = useContext(Globalcontext);


    return (
        <div className="history-container">
            <hr className="history-topdivider" />
            <h2>History <hr className="history-heading-divider" /></h2>
            <ul className="history-list">
                {transactions.transactions.map(transaction =>(
                     <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}><button onClick={() => DeleteTransactions(transaction.id)} className="del-btn" title="Delete">X</button><span className="amount">{sign}{Math.abs(transaction.amount)}$</span> <span className="des">{transaction.des}</span></li>
                     
                )

                )}
            </ul>
{/* 
            <ul className="history-list">
                {firebase.database().ref('/').on('value', function (data){
                    let to = data.val();
                    [to].map(transactio =>(
                        <li className={transactio.amount < 0 ? 'minus' : 'plus'} key={transactio.id}><button onClick={() => DeleteTransactions(transactio.id)} className="del-btn" title="Delete">X</button><span className="amount">{sign}{Math.abs(transactio.amount)}$</span> <span className="des">{transactio.des}</span></li>
                        
                    ))
                     })}
            </ul> */}

            <hr />
        </div>
    )
}

export default History;