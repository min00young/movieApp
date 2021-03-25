import React, { useState } from "react";


type SearchProps = {
  search: (searchValue: string) => void;
};

function Search({ search }: SearchProps) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearchInputChanges(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function resetInputField() {
    setSearchValue("");
  }

  function callSearchFunction(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  }

  return (
    <form className="search" onSubmit={callSearchFunction}>
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text" />

      <button type="submit">Search</button>
    </form>
  );
}

export default Search;