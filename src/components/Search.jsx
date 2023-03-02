import { Form, Input } from 'antd';

function Search({ setSearchInput }) {
  const handleSearch = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <Form.Item
        label="Search your dishes"
        name="searchInput"
        onChange={handleSearch}
      >
        <Input />
      </Form.Item>
    </>
  );
}

export default Search;
