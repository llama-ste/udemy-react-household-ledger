import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem({ titles, amount, date }) {
  return (
    <li>
      <Card className="expense-item">
        <div className="">
          <ExpenseDate date={date} />
        </div>
        <div className="expense-item__description">
          <h2>{titles}</h2>
          <p className="expense-item__price">${amount}</p>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
