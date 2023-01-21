import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const expenses = props.expenses;
  const [filteredYear, setYearFilter] = useState("2023")

  const filterChangeHandler = (year) => {
    setYearFilter(year)
    console.log("App year: " + filteredYear);
  };



  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
    </Card>
  );
}

export default Expenses;
