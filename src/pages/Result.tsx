import React from "react";
import { Link, useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  return (
    <>
      <div>We don't have any {(state as any).val} result!</div>
      <div>Language is {(state as any).lan}</div>
      <Link to="/">Go Main</Link>
    </>
  );
}

export default Result;
