import React, { useState, useReducer } from "react";

const DisplayRow = ({ row }) => {
  const initialState = {
    color: "black",
    display: "none",
  };
  const [style, setStyle] = useState(initialState);

  const handleMouseEnter = () => {
    setStyle({
      color: "red",
      display: "block",
    });
  };
  const handleMouseLeave = () => {
    setStyle({
      color: "black",
      display: "none",
    });
  };

  return (
    <>
      <tr
        key={row.id}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: style.color }}
      >
        <td>{row.id} </td>
        <td>{row.title} </td>
        <td>{row.price} </td>
        <td>{row.discountPer} </td>
        <td>{row.deliveryCharge} </td>
        <td>{row.currency} </td>
        <td>{row.description} </td>
        <td>
          <img src={row.image} />
        </td>
        <td>
          <button style={{ display: style.display }}>Button</button>
        </td>
      </tr>
    </>
  );
};

export default DisplayRow;
