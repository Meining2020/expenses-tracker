

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card.js'
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const { amount, date, title } = props

    return(
        <li>
            <Card className="expense-item">
                <ExpenseDate date={date} />
                <div className="expense-item-description">
                    <h2>{title}</h2>
                    <div className="expense-item-price">
                        {amount}
                    </div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;