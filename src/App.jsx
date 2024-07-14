import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Balance from './components/balance'
import IncomeExpenses from './components/incomeexpenses'
import TransactionList from './components/transactionlist'
import AddTransaction from './components/addtransaction'
import { GlobalProvider } from './context/GlobalState'
import Chart from './components/chart'

function App() {
  return (
    <GlobalProvider><Header></Header> 
    <div className="container">
        <div className=' top-container'>
            <Balance></Balance>
            <Chart></Chart>
        </div>
        <div className="bottom-contianer">
             <IncomeExpenses></IncomeExpenses>
             <TransactionList></TransactionList>
             <AddTransaction></AddTransaction>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
