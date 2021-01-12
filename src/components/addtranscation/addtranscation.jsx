import React, { useReducer, useState } from 'react'
import '../addtranscation/addtranscation.css';
import History from '../history/history'
import Reducer from '../../reducer/reducer'

function Addtranscation(props) {
    
    let [state, dispatch] = useReducer(Reducer)
    let [newDes, setDec] = useState("");
    let [newAmount, setAmount] = useState(0);
    console.log(props);
    // console.log(setAmount, setDec);
    // console.log(newDes, newAmount);


   
   const sumbittransaction = (event) => {
       event.preventDefault();
  

   }
    return (
        <div className="addtranscation-container">
            <h2>Add New Transaction</h2>
            <form className="transaction-form" onSubmit={sumbittransaction}>
                <label>
                   <h3> Add Description <hr className="adddescription-divider"/></h3>
                <input type="text" placeholder="Enter Description" onChange={(ev)=> setDec(ev.target.value)} required/>
                </label>
                <br /> <br/>
                <label>
                    <h3>Add Amount <hr className="addamount-divider"/></h3>
                <input type="number" placeholder="Enter Amount" onChange={(ev) => setAmount(ev.target.value)} required/>
                </label>

            <button type="submit" >Add Transaction</button>
            </form>
            <History des={newDes} amount={newAmount}/>
        </div>
    )
}

export default Addtranscation;