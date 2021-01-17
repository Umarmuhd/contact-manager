import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../images/search.svg";
import "./SearchContact.css";

function SearchContact({ searchText }) {
  const [text, setText] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="right-1 align-self-center">
      <form onSubmit={submitHandler} className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2 contacts-search-box text-center"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setText(e.target.value)}
        />
        {text && (
          <button className="submit-btn btn" type="submit">
            <SearchIcon />
          </button>
        )}
      </form>
    </div>
  );
}

export default SearchContact;
