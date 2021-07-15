import './ExpenseForm.css';

import { useState } from 'react';

const ExpenseForm = (props) => {
    // const [title,setEnteredTitle] = useState('');
    // const [amount, setEnteredAmount] = useState('');
    // const [date, setdate] = useState('');

    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }

    const amountChangeHandler = event => {
        setUserInput((prevState) => {
            return {...prevState, amount: event.target.value}
        })

    }

    const dateChangeHandler = event => {
        setUserInput((prevState) => {
            return { ...prevState, date: event.target.value}
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        props.onSaveExpenseData({
            ...userInput,
            date: new Date(userInput.date)
        })

        setUserInput({
            title: '',
            amount: '',
            date: ''
        })

        props.onShowForm()
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id='title' value={userInput.title} onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id='amount' value={userInput.amount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label htmlFor="date">Date</label>
                    <input type="date" id='date' value={userInput.date} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                    
                </div>
            </div>
            <div className="new-expense-actions">
                <button onClick={props.onShowForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;