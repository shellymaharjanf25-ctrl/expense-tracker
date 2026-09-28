import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
  return (
    <div className="transaction-list">
      <h2>Transaction History</h2>

      {transactions.length === 0 ? (
        <p>No transactions yet.</p>
      ) : (
        transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
          />
        ))
      )}
    </div>
  );
}

export default TransactionList;