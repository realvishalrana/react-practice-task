import React, { useState, useEffect, useMemo, useCallback } from "react";
import JsonData from "../jsonData/mockData.json";
import DisplayRow from "./DisplayRow";

const DisplayData = () => {
  const [addition, setAddition] = useState(0);

  const calculation = useCallback(
    (price, discount, deliveryCharge) => {
      let result = price - (price * discount) / 100 + deliveryCharge + addition;
      return result;
    },
    [addition]
  );

  return (
    <div>
      <label>
        Add Number :
        <input
          type="text"
          onChange={(e) => {
            setAddition(Number(e.target.value));
          }}
        />
      </label>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">discountPer</th>
            <th scope="col">deliveryCharge</th>
            <th scope="col">currency</th>
            <th scope="col">description</th>
            <th scope="col">Total </th>
          </tr>
        </thead>
        <tbody>
          {JsonData.slice(0, 50).map((item) => (
            <DisplayRow key={item.id} row={item} calculation={calculation} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
