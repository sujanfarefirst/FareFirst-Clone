import "./component.css";

export const SearchResult = ({ result, onSelect }) => {
  if (!result || result.length === 0) return null;

  return (
    <div className="suggestions-list">
      {result.map((item, id) => (
        <div
          key={id}
          className="suggestion-item"
          onClick={() => onSelect(item)}
        >
          <div className="code">{item.code}</div>
          <div>{item.name},</div>
          <div>{item.main_airport_name}</div>
        </div>
      ))}
    </div>
  );
};
