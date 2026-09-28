import { categories } from "../categories";

function FilterBar({ filterCategory, onFilterChange, sortOrder, onSortChange }) {
  return (
    <div className="filter-bar">
      <select value={filterCategory} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="All">All categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select value={sortOrder} onChange={(e) => onSortChange(e.target.value)}>
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
      </select>
    </div>
  );
}

export default FilterBar;