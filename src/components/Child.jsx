import React, { useState } from "react";
const Child = () => {
  return <>Hello</>;
};

export default Child;

/*
          Example 1
*/

// import React, { useState } from "react";

// const Child = (prop) => {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     prop.getData(name);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => {
//             setName(e.target.value);
//           }}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Child;

// import "./App.css";
// import Child from "./components/Child";
// function App() {
//   const getData = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <Child getData={getData} />
//     </>
//   );
// }

// export default App;

/*
          Example 2
*/

// import React from "react";

// const Child = (props) => {
//   return (
//     <div
//       className="container"
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-evenly",
//       }}
//     >
//       <h1>{props.data}</h1>
//       <button
//         style={{
//           background: "blue",
//           color: "white",
//         }}
//         onClick={() => {
//           props.removeItem(props.id);
//         }}
//       >
//         reset
//       </button>
//     </div>
//   );
// };

// export default Child;

// import "./App.css";
// import Child from "./components/Child";
// import { useState } from "react";
// function App() {
//   const [user, setUser] = useState([
//     "Miss Darrell Will",
//     "Jerry Haag",
//     "Caleb MacGyver",
//     "Conrad Kuhic",
//     "Fredrick Breitenberg",
//     "Natasha Hessel",
//     "Verna Rodriguez",
//     "Elizabeth Nikolaus",
//     "Jasmine Mraz",
//     "Rudy Walter",
//   ]);

//   const deleteItem = (deleteId) => {
//     const finalUser = user.filter((value, id) => {
//       return id != deleteId;
//     });
//     setUser(finalUser);
//   };

//   return (
//     <>
//       {user.map((value, index) => {
//         return (
//           <Child data={value} key={index} id={index} removeItem={deleteItem} />
//         );
//       })}
//     </>
//   );
// }

// export default App;
