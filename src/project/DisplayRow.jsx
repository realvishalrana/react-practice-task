import React, { useState, useMemo } from "react";
import "./css/styles.css";
// import getSymbolFromCurrency from "currency-symbol-map";
var currencyFormatter = require("currency-formatter");

const DisplayRow = ({ row, calculation }) => {
  const [hover, setHover] = useState(false);
  const [inputs, setInputs] = useState({
    price: row.price,
    deliveryCharge: row.deliveryCharge,
    discountPer: row.discountPer,
  });

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: Number(value) });
  };

  const ans = useMemo(() => {
    return calculation(inputs.price, inputs.discountPer, inputs.deliveryCharge);
  }, [inputs, calculation]);

  let formatCurrency = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: row.currency,
  });

  return (
    <tr
      key={row.id}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`row ${hover ? "active" : ""}`}
    >
      <td>{row.id} </td>
      <td>{row.title} </td>
      <td>
        <input
          name="price"
          value={inputs.price}
          type="text"
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="discountPer"
          value={inputs.discountPer}
          type="text"
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          name="deliveryCharge"
          value={inputs.deliveryCharge}
          type="text"
          onChange={handleChange}
        />
      </td>
      {/* <td>{formatCurrency}</td> */}
      <td>{row.currency} </td>
      <td>{row.description} </td>
      <td>
        <div className={hover ? "" : "hidden"}></div>
        {currencyFormatter.format(ans, { code: row.currency })}
        {/* {calculation(inputs.price, inputs.discountPer, inputs.deliveryCharge)} */}
      </td>
    </tr>
  );
};

export default DisplayRow;
