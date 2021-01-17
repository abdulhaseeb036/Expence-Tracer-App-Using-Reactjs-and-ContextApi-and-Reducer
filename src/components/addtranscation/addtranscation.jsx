import React, { useContext, useState } from 'react'
import '../addtranscation/addtranscation.css';
import {Globalcontext} from '../../contextapi/contextapi';



function Addtranscation(props) {
    
    // form input value store here
    let [des, setDec] = useState("");
    let [amount, setAmount] = useState(0);

    const {AddTransaction} = useContext(Globalcontext);


    // form submit button pr click 
    const sumbittransaction = (event) => {
        event.preventDefault();
        
        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            des,
            amount: +amount

        }
        AddTransaction(newTransaction);
    }
    
    return (
        <div className="addtranscation-container">
            <h2>Add New Transaction</h2>
            <form className="transaction-form" onSubmit={sumbittransaction}>
                <label>
                    <h3> Add Description <hr className="adddescription-divider" /></h3>
                    <input type="text" placeholder="Enter Description" onChange={(ev) => setDec(ev.target.value)} required />
                </label>
                <br /> <br />
                <label>
                    <h3>Add Amount <hr className="addamount-divider" /></h3>
                    <input type="number" placeholder="Amount: for Expence write (- neg) sign before value" onChange={(ev) => setAmount(ev.target.value)} required />
                </label>

                <button type="submit" >Add Transaction</button>
            </form>
        </div>
    )
}

export default Addtranscation;