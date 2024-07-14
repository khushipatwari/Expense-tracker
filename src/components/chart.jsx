import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Chart as Chartjs} from 'chart.js/auto'
import {Doughnut} from 'react-chartjs-2'

const Chart = () => {


    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    );
  return (
    <Doughnut data={{
        labels:['expense','income'],
        datasets:
        [ {data:[expense,income]}]
    }}>
    </Doughnut>
  )
}

export default Chart