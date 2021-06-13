import "./SearchBar.css";
import { useState } from "react";

const SearchBar = ({ submit }) => {
  const [term, setTerm] = useState("");

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(term);
    setTerm("");
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Search</label>
          <input type="text" value={term} onChange={handleInputChange} />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
