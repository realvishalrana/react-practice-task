import React, { useState } from "react";

const DisplayRow = ({ row }) => {
  const [bg, setBg] = useState("");

  const handleMouseEnter = (e) => {
    setBg("red");
  };
  const handleMouseLeave = (e) => {
    setBg("black");
  };

  const rowStyle = {};

  return (
    <tr
      key={row.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ color: bg }}
    >
      <td>{row.userId} </td>
      <td>{row.id} </td>
      <td>{row.title} </td>
      <td>{row.body} </td>
      <button>Button</button>
    </tr>
  );
};

export default DisplayRow;
