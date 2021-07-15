import './ExpensesList.css';
import ExpenseItem from './ExpenseItem.js';

const ExpensesList = ({ items }) => {

    if (items.length === 0) {
        return <h2 className="expenses-list-fallback">Found no expenses.</h2>
    }

    return (

        <ul className="expenses-list">
            {
                items.map((expense) => {
                    return (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
                })
            }
        </ul>

    )

}

export default ExpensesList;