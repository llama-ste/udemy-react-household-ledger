import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

function Expenses({ item }) {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filteredExpenses = item.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  function filterChangeHandler(selectedYear) {
    setfilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
