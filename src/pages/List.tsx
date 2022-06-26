import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

type TypeList = {
  id: number;
  title: string;
  desc: string;
};

export const mockData: TypeList[] = [
  {
    id: 1,
    title: "tomboy",
    desc: "tomboy with dance",
  },
  {
    id: 2,
    title: "goodboy",
    desc: "goodBoy with music",
  },
  {
    id: 3,
    title: "badboy",
    desc: "badboy with movie",
  },
];

function List() {
  const location = useLocation();
  return (
    <>
      <h1>{location.state as string}</h1>
      <div>
        <ul>
          {mockData.map(({ id, title, desc }) => (
            <li key={id}>
              <div>
                <p>
                  title: <Link to={`${id}/detail`}>{title}</Link>
                </p>
                <p>desc: {desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default List;
