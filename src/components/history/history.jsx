import React from 'react';
import '../history/history.css';


function History(props) {
   console.log(props.des);

    let transaction = [
        {
            des: props.des,
            amount: props.amount
        }
        // {
        //     des: "cold",
        //     amount: -100
        // },
        // {
        //     des: "bill",
        //     amount: +700
        // }

    ]
    return (
        <div className="history-container">
            <hr className="history-topdivider" />
            <h2>History <hr className="history-heading-divider" /></h2>
            <ul className="history-list">
                {transaction.map((val,ind) => {
                    return (
                        <li key={ind}><span>{val.des}</span>  <span>{val.amount}</span></li>
                    )

                })}
            </ul>
            <hr />
        </div>
    )
}

export default History;