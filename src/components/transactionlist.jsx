import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './transaction'

const TransactionList = () => {
    const {transactions} = useContext(GlobalContext)
    // console.log(context)
  return (
   <>
   <h3>History</h3>
      <ul id="list" className="list">
       {
        transactions.map(transaction => (<Transaction  key ={transaction.id} transaction={transaction}></Transaction>))
       }
      </ul>
     </>
  )
}

export default TransactionList