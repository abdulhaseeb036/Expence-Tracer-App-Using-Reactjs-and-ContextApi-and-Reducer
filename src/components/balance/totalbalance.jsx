import React, { useContext } from 'react';
import './totalbalace.css';
import {Globalcontext} from '../../contextapi/contextapi'

function Totalbalance() {

  const transactionsamount = useContext(Globalcontext);
  const amount = transactionsamount.transactions.map(transaction =>(
       transaction.amount
  ));

  const totalbalance = amount.reduce((initial, currentval) => ((initial += currentval)),0);

    return (
      <div>
        <hr />
      <h2>Your Total Balace <hr className="totalbalance-divider"/>{totalbalance}$</h2>
      <hr />
      <br/>
      </div>
    )
}
export default Totalbalance;