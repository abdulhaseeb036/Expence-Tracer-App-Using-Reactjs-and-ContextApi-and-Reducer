import React, { useContext } from 'react'
import '../incomeexpenceData/incomeexpence.css';
import {Globalcontext} from '../../contextapi/contextapi'

function Incomeexpence() {
    const transactions = useContext(Globalcontext);

    const amount = transactions.transactions.map(transaction => (
        transaction.amount
    ))
    
    const income = amount.filter(val => val > 0).reduce((intial, current)=> (intial += current),0);
    const expence = amount.filter(val => val < 0).reduce((initial,current)=> (initial += current),0);


    
    return (
        <div className="incomeexpence">
            <h4>Income <br /> <span className="pluss">{income}$ </span></h4>
            <h4>Expence <br /> <span className="minuss">{expence}$ </span></h4>
        </div>
    )
}
export default Incomeexpence;