import React from "react";

function SearchBox({ search, setSearch, searchFilterFunction }) {
  console.log("search value", search);
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          searchFilterFunction(search);
        }}
      />
    </>
  );
}

export default SearchBox;
