import { useState } from "react";

export default function TaskApp() {
  const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);

  const handleChange = () => {
    setTodos({
      ...todos,
      text: "vishal",
    });
  };

  return (
    <>
      <input onChange={handleChange} />
      {todos}
    </>
  );
}
// import React, { useState } from "react";

// const Form = () => {
//   const [person, setPerson] = useState({
//     name: "Niki de Saint Phalle",
//     artwork: {
//       title: "Blue Nana",
//       city: "Hamburg",
//       image: "https://i.imgur.com/Sd1AgUOm.jpg",
//     },
//   });

//   const handleNameChange = (e) => {
//     setPerson({
//       ...person,
//       name: e.target.value,
//     });
//   };

//   const handleTitleChange = (e) => {
//     setPerson({
//       ...person,
//       artwork: {
//         ...person.artwork,
//         title: e.target.value,
//       },
//     });
//   };

//   return (
//     <div>
//       <label>
//         Name
//         <input value={person.name} onChange={handleNameChange} />
//       </label>
//       <label>
//         Title
//         <input value={person.artwork.title} onChange={handleTitleChange} />
//       </label>

//       <p>
//         <i>{person.artwork.title}</i>
//         {" by "}
//         {person.name}
//         <br />
//         (located in {person.artwork.city})
//       </p>
//       <img src={person.artwork.image} alt={person.artwork.title} />
//     </div>
//   );
// };

// export default Form;

// https://react.dev/learn/reusing-logic-with-custom-hooks

// // const Form = () => {
// //   const [form, setForm] = useState({
// //     firstName: "john",
// //     lastName: "cena",
// //     email: "bhepworth@sculpture.com",
// //   });

// //   const handleFirstNameChange = (e) => {
// //     setForm({
// //       ...form,
// //       firstName: e.target.value,
// //     });
// //   };

// //   const handleLastNameChange = (e) => {
// //     setForm({
// //       ...form,
// //       last: e.target.value,
// //     });
// //   };

// //   return (
// //     <>
// //       <label>
// //         First Name:
// //         <input value={form.firstName} onChange={handleFirstNameChange} />
// //       </label>
// //       <label>
// //         Last Name:
// //         <input value={form.lastName} onChange={handleLastNameChange} />
// //       </label>

// //       <p>{form.firstName}</p>
// //     </>
// //   );
// // };

// // const Form = () => {
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");

// //   const fullName = firstName + " " + lastName;

// //   function handleFirstNameChange(e) {
// //     setFirstName(e.target.value);
// //   }

// //   function handleLastNameChange(e) {
// //     setLastName(e.target.value);
// //   }

// //   return (
// //     <div>
// //       <h2>Let’s check you in</h2>
// //       <label></label>
// //       <input value={firstName} onChange={handleFirstNameChange} />
// //       <input value={lastName} onChange={handleLastNameChange} />
// //       <p>
// //         Your ticket will be issued to: <b>{fullName}</b>
// //       </p>
// //     </div>
// //   );
// // };
