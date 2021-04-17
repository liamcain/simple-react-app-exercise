import React from "react";

import "./Search.css";

interface IProps {
  filterQuery: string;
  setFilterQuery: (query: string) => void;
}

export default function Search(props: IProps) {
  const { filterQuery, setFilterQuery } = props;

  return (
    <div className="search-container">
      <input
        className="search-input"
        onChange={(e) => setFilterQuery(e.target.value)}
        placeholder="Search..."
        type="search"
        value={filterQuery}
      />
    </div>
  );
}
