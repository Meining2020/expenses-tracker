
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter.js';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';
import './Expenses.css';

import { useState } from 'react';

const Expenses = ({ expenses }) => {
    const [selectedYear, setSelectedYear] = useState('2021');

    const saveExpensesFilterHandler = (year) => {
        setSelectedYear(year);
    }

    const filteredExpenses = expenses.filter((expense) => {
        return (expense.date.getFullYear().toString() ===
            selectedYear )});

    

    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onSaveExpensesFilter={saveExpensesFilterHandler} />

                <ExpensesChart expenses={filteredExpenses}/>

                <ExpensesList items = {filteredExpenses}/>
                
            </Card>
        </div>

    )
}

export default Expenses;