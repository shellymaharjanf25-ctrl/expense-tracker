import { useState } from "react";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import FilterBar from "./components/FilterBar";
import TransactionList from "./components/TransactionList";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const visibleTransactions = transactions
    .filter((t) => filterCategory === "All" || t.category === filterCategory)
    .sort((a, b) => (sortOrder === "newest" ? b.id - a.id : a.id - b.id));

  return (
    <div className="app">
      <h1>Personal Expense Tracker</h1>
      <Summary transactions={transactions} />
      <TransactionForm onAdd={addTransaction} />
      <FilterBar
        filterCategory={filterCategory}
        onFilterChange={setFilterCategory}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />
      <TransactionList transactions={visibleTransactions} onDelete={deleteTransaction} />
    </div>
  );
}

export default App;