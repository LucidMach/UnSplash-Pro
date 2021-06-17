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
          <label>Search Images</label>
          <input type="text" value={term} onChange={handleInputChange} />
          <p>
            Powered by <strong>UnSplash</strong> | Built for{" "}
            <strong>Pro</strong>
            grammers
          </p>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
