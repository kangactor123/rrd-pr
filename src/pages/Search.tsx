import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [val, setVal] = useState("");
  const handleChange = (value: React.FormEvent<HTMLInputElement>) => {
    setVal(value.currentTarget.value);
  };
  const navigate = useNavigate();
  const handleSearch = () => {
    setVal("");
    navigate(`../result`, {
      state: {
        val,
        lan: "ko",
      },
    });
  };
  return (
    <div>
      <input value={val} onChange={handleChange} />
      <button onClick={handleSearch}>Search!</button>
    </div>
  );
}

export default Search;
