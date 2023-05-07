import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/UI/Card";
import ExpensesFilter from "../NewExpenses/ExpenseFilter";
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);


    }
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;


    })
    let expenseContent = <p>NO expense found</p>;
    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={ expense.id }
                title={ expense.title }
                amount={ expense.amount }
                date={ expense.date }

            />

        ));
    }


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={ filteredYear } onChangeHandler={ filterChangeHandler } />


                { expenseContent }
            </Card>
        </div>
    );

};
export default Expenses;