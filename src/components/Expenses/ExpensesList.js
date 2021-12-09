import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ items }) {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((data) => {
        return (
          <ExpenseItem
            key={data.id}
            titles={data.title}
            amount={data.amount}
            date={data.date}
          />
        );
      })}
    </ul>
  );
}

export default ExpensesList;
