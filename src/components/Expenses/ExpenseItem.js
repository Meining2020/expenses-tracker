import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js'
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    let { amount, date } = props

    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('updtaed')
    }

    return(
        <Card className="expense-item">

            <ExpenseDate date={date}/>

            <div className="expense-item-description">
                <h2>{title}</h2>
                <div className="expense-item-price">
                    {amount}
                </div>
            </div>
            <button onClick= {clickHandler}>
                change title
            </button>
        </Card>
    )
}

export default ExpenseItem;