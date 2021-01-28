import React, { useState } from "react";

const SearchBar = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    console.log(q);
    setText(q);
    getQuery(q);
  };
  // const onSubmit = () => {
  //   console.log("submit")
  // }
  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search For People"
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchBar;
