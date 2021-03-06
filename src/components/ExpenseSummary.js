import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import expensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {

    return (
        <div>
            <p className="summary-total-expenses">Selected Expense(s): {props.expenses.length}</p>
            <p className="summary-total-amount">Total Amount: {numeral(expensesTotal(props.expenses) / 100).format('$0,0.00')}</p>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
        // expensesTotal: expensesTotal(expenses)
    }
};

export default connect(mapStateToProps)(ExpenseSummary);
