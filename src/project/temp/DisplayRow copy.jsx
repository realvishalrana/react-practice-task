import React, { useState, useMemo } from "react";
import Calculation from "./Calculation";
import "./css/styles.css";

const DisplayRow = ({ row }) => {
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

  // const result = useMemo(() => {
  //   return (
  //     inputs.price -
  //     (inputs.price * inputs.discountPer) / 100 +
  //     inputs.deliveryCharge
  //   );
  // }, [inputs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: Number(value) });
  };

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
      <td>{row.currency} </td>
      <td>{row.description} </td>
      <td>
        <div className={hover ? "" : "hidden"}></div>
        {/* {result} */}
        <Calculation result={inputs} />
      </td>
    </tr>
  );
};

export default DisplayRow;

// // const onChangeInput = (e, rowId) => {
// //   const { name, value } = e.target;
// //   setTotal({
// //     [name]: value,
// //   });
// //   calculation();
// // };

// import React, { useState } from "react";
// import "./css/styles.css";

// const DisplayRow = ({ row }) => {
//   const [hover, setHover] = useState(false);
//   const [text, setText] = useState({
//     changeText: "",
//     flag: true,
//   });

//   const handleMouseEnter = () => {
//     setHover(true);
//   };

//   const handleMouseLeave = () => {
//     setHover(false);
//   };

//   const handleClick = (price, discount, deliveryCharge) => {
//     const result = ((price + deliveryCharge) % discount) * 100;
//     setText({
//       changeText: result,
//       flag: false,
//     });
//   };

//   return (
//     <tr
//       key={row.id}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       className={`row ${hover ? "active" : ""}`}
//     >
//       <td>{row.id} </td>
//       <td>{row.title} </td>
//       <td>{row.price} </td>
//       <td>{row.discountPer} </td>
//       <td>{row.deliveryCharge} </td>
//       <td>{row.currency} </td>
//       <td>{row.description} </td>
//       <td>
//         <img src={row.image} />
//       </td>
//       <td>
//         {text.flag ? (
//           <button
//             className={hover ? "show" : "hidden"}
//             onClick={() =>
//               handleClick(row.price, row.discountPer, row.deliveryCharge)
//             }
//           >
//             button
//           </button>
//         ) : hover ? (
//           text.changeText
//         ) : (
//           ""
//         )}
//       </td>
//     </tr>
//   );
// };

// export default DisplayRow;

// // import React, { useState } from "react";
// // import "./css/styles.css";

// // const DisplayRow = ({ row }) => {
// //   const [hover, setHover] = useState(false);
// //   const [total, setTotal] = useState();

// //   const handleMouseEnter = () => {
// //     setHover(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setHover(false);
// //   };

// //   const handleClick = () => {
// //     const result = ((row.price + row.deliveryCharge) % row.discountPer) * 100;
// //     setTotal(result);
// //   };

// //   return (
// //     <tr
// //       key={row.id}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //       className={`row ${hover ? "active" : ""}`}
// //     >
// //       <td>{row.id} </td>
// //       <td>{row.title} </td>
// //       <td>{row.price} </td>
// //       <td>{row.discountPer} </td>
// //       <td>{row.deliveryCharge} </td>
// //       <td>{row.currency} </td>
// //       <td>{row.description} </td>
// //       <td>
// //         <img src={row.image} />
// //       </td>
// //       <td>
// //         <div className={hover ? "show" : "hidden"}>
// //           {total ?? <button onClick={() => handleClick()}>button</button>}
// //         </div>
// //       </td>
// //     </tr>
// //   );
// // };

// // ------------------------------------------------------------

// // export default DisplayRow;

// // import React, { useState } from "react";
// // import "./css/styles.css";

// // const DisplayRow = ({ row }) => {
// //   const [hover, setHover] = useState(false);
// //   const [total, setTotal] = useState();
// //   const handleMouseEnter = () => {
// //     setHover(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setHover(false);
// //   };

// //   const result = ((row.price + row.deliveryCharge) % row.discountPer) * 100;

// //   const calculation = (row) => {
// //     console.log(row.price + row.deliveryCharge + row.discountPer);
// //     // const ans = ((row["price"] + row.deliveryCharge) % row.discountPer) * 100;
// //     // console.log(ans);
// //     // return ans;
// //   };

// //   const onChangeInput = (e, rowId) => {
// //     const { name, value } = e.target;
// //     let x = name && { [name]: value };
// //     // let result = calculation(x);
// //     // setTotal(result);
// //   };

// //   return (
// //     <tr
// //       key={row.id}
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //       className={`row ${hover ? "active" : ""}`}
// //     >
// //       <td>{row.id} </td>
// //       <td>{row.title} </td>
// //       <td>
// //         <input
// //           name="price"
// //           value={row.price}
// //           type="text"
// //           onChange={(e) => onChangeInput(e, row.id)}
// //         />
// //       </td>
// //       <td>
// //         <input
// //           name="discountPer"
// //           value={row.discountPer}
// //           type="text"
// //           onChange={(e) => onChangeInput(e, row.id)}
// //         />
// //       </td>
// //       <td>
// //         <input
// //           name="deliveryCharge"
// //           value={row.deliveryCharge}
// //           type="text"
// //           onChange={(e) => onChangeInput(e, row.id)}
// //         />
// //       </td>
// //       <td>{row.currency} </td>
// //       <td>{row.description} </td>
// //       <td>
// //         <img src={row.image} />
// //       </td>
// //       <td>
// //         <div className={hover ? "" : "hidden"}></div>
// //         {result}
// //       </td>
// //     </tr>
// //   );
// // };

// // export default DisplayRow;
