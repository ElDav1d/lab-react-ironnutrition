function Search({ setSearchInput }) {
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <label htmlFor="searchInput">Search</label>
      <input type="text" name="searchInput" onChange={handleSearch} />
    </>
  );
}

export default Search;
