import React, { useState } from "react";
import "./component.css";

import { SearchResult } from "./Suggestion";

function InputBar({
  plane,
  placeholder,
  value,
  onChange,
  result,
  handleSelect,
  showSuggestions,
  onFocus,
}) {
  return (
    <div>
      <div className="input-wrapper">
        <div className="flight-input-logo">{plane}</div>
        <input
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type="search"
          onFocus={onFocus}
          required
        />
        {showSuggestions && result.length > 0 && (
          <SearchResult result={result} onSelect={handleSelect} />
        )}
      </div>
    </div>
  );
}

export default InputBar;
