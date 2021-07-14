import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter.js';
import './Expenses.css';

import { useState } from 'react';

const Expenses = ({expenses}) => {
    const [selectedYear, setSelectedYear] = useState('2021');

    const saveExpensesFilterHandler = (year) => {
        setSelectedYear(year);
    }

    return (
        <div>
            <ExpensesFilter selected={selectedYear} onSaveExpensesFilter={saveExpensesFilterHandler} />

            <Card className="expenses">
                <ExpenseItem
                    title={expenses[0].title}
                    amount={expenses[0].amount}
                    date={expenses[0].date} />

                <ExpenseItem
                    title={expenses[1].title}
                    amount={expenses[1].amount}
                    date={expenses[1].date} />

                <ExpenseItem
                    title={expenses[2].title}
                    amount={expenses[2].amount}
                    date={expenses[2].date} />

                <ExpenseItem
                    title={expenses[3].title}
                    amount={expenses[3].amount}
                    date={expenses[3].date} />
            </Card>
        </div>
        
    )
}

export default Expenses;