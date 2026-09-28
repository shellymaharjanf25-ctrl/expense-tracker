function TransactionItem({ transaction, onDelete }) {
  const { id, type, amount, category, description, date } = transaction;

  return (
    <li className={`item ${type}`}>
      <div>
        <strong>{description}</strong>
        <p>{category} • {date}</p>
      </div>
      <div className="item-right">
        <span>{type === "income" ? "+" : "-"} Rs. {amount.toFixed(2)}</span>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
}

export default TransactionItem;