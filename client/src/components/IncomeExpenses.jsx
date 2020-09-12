import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import numberFormat from '../utils/format';

function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
        amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
        -1
    ).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{numberFormat(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{numberFormat(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses