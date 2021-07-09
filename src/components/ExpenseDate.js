import './ExpenseDate.css'

const ExpenseDate = ({date}) => {
    const month = date.toLocaleString('en-US', { month: 'long' });
    const day = date.toLocaleString('en-US', { day: '2-digit' });
    const year = date.toLocaleString('en-US', { year: 'numeric' })
    return(
        <div className="expense-date">
            <div className='expense-date-month'>{month}</div>
            <div className='expense-date-year'>{year}</div>
            <div className='expense-date-day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;