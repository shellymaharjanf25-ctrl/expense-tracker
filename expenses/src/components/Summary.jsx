function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="summary">
      <div>Income<strong className="income-text">Rs. {income.toFixed(2)}</strong></div>
      <div>Expenses<strong className="expense-text">Rs. {expense.toFixed(2)}</strong></div>
      <div>Balance<strong>Rs. {(income - expense).toFixed(2)}</strong></div>
    </div>
  );
}

export default Summary;