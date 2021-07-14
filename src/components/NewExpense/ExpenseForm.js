import './ExpenseForm.css';

import { useState } from 'react';

const ExpenseForm = (props) => {
    // const [enteredTitle,setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value }
        })
    }

    const amountChangeHandler = event => {
        setUserInput((prevState) => {
            return {...prevState, enteredAmount: event.target.value}
        })

    }

    const dateChangeHandler = event => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value}
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        props.onSaveExpenseData(userInput)

        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })
        
    }



    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' value={userInput.enteredTitle} onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id='amount' value={userInput.enteredAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id='date' value={userInput.enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                    
                </div>
            </div>
            <div className="new-expense-actions">
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;