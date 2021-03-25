import React, { useState } from "react";

function Search({ search }: any) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearchInputChanges(e: any) {
    setSearchValue(e.target.value);
  }

  function resetInputField() {
    setSearchValue("");
  }

  function callSearchFunction(e: any) {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  }

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text" />

      <input onClick={callSearchFunction} type="submit" value="SEARCH" />
    </form>
  );
}

export default Search;