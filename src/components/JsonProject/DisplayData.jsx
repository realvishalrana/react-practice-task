import React, { useId } from "react";
import DisplayRow from "./DisplayRow";

const DisplayData = ({ data, loading }) => {
  if (loading) {
    return <h1>Loading</h1>;
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">userId</th>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
          <th scope="col">Button</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <DisplayRow key={item.id} row={item} />
        ))}
      </tbody>
    </table>
  );
};

export default DisplayData;
