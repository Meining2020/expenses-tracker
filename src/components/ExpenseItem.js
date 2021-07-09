import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card.js'

function ExpenseItem (props) {

    const {title, amount, date} = props;

    return(
        <Card className="expense-item">

            <ExpenseDate date={date}/>

            <div className="expense-item-description">
                <h2>{title}</h2>
                <div className="expense-item-price">
                    {amount}
                </div>
            </div>
        </Card>
    )
}

export default ExpenseItem;