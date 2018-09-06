import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

import { removeExpense } from '../actions/expenses';

export const ExpenseItem = (props) => (
    <div>
        <Link to={`edit/${props.id}`}>
            <h3>{props.description}</h3>
        </Link>
        <p>Cost: {numeral(props.amount / 100).format('$0,0.00')}</p> 
        <p>Created On: {moment(props.createdAt).format('MMMM Do, YYYY')}</p>
        <Link to={`edit/${props.id}`}>Edit</Link>
    </div>
);

export default connect()(ExpenseItem);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));