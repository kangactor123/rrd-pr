import React from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const goList = () => {
    navigate("/list", {
      state: "temp State",
    });
  };
  const goSearch = () => {
    navigate("/search");
  };
  return (
    <div>
      <h1>Main Page</h1>
      <button onClick={goList}>Go List</button>
      <br />
      <button onClick={goSearch}>Go Search</button>
    </div>
  );
}

export default Main;
