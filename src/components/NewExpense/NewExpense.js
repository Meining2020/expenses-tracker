import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

import { useState } from 'react';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)

    const saveExpenseDataHanlder = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }

    const showFormHandler = () => {
        setShowForm(!showForm);
    }



    return (
        <div className="new-expense">
            {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder} onShowForm={showFormHandler}/>}
        </div>
    )
}

export default NewExpense;