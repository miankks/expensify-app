import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';




const ExpenseList = (props) => (
    <div>
        <h1>Expense list</h1>
        {props.expenses.map( expense => {
            return <ExpenseListItem key={expense.id} {...expense}/>
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);

// const mapStateToProps = (state) => {
//     return {
//         expenses: state.expenses,
//         filters: state.filters
//     }
// }

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList);
// export default ConnectedExpenseList;