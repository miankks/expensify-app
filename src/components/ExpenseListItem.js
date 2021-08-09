import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, createdAt}) => {
    return (
        <div>
        <Link to={`/edit/${id}`}>
                <h3>{description}</h3>
                </Link>
                <p>{amount} - {createdAt}</p>
                </div>
                )
            }
            
    export default ExpenseListItem;
            
// when remove button was here

        // const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {
        // import { connect } from 'react-redux';
        // import { removeExpense } from '../actions/expenses';
        // <button onClick={() =>{
        //     dispatch(removeExpense({id}))
        // }}>Remove Item</button>