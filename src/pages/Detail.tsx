import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockData } from "./List";

function Detail() {
  //const { id } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const detailData = mockData.find((data) => data.id === +(id as string));

  const goMain = () => {
    navigate("/");
  };
  return (
    <>
      <h1>this is Detail of {detailData?.title}</h1>
      <div>
        <p>desc: {detailData?.desc}</p>
      </div>
      <div>
        <button onClick={goMain}>go Main Page</button>
      </div>
    </>
  );
}

export default Detail;
