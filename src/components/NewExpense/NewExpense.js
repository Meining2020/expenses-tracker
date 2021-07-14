import './NewExpense.css';
import ExpenseForm from './ExpenseForm.js';

const NewExpense = (props) => {
    const saveExpenseDataHanlder = (enteredExpenseDate) => {
        const expenseData = {
            ...enteredExpenseDate,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData);
    }



    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHanlder}/>
        </div>
    )
}

export default NewExpense;