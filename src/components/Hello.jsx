import React from "react";

const user = {
  name: "Hedy Lamarr's Todos",
  avatarUrl: "https://i.imgur.com/yXOvdOSs.jpg",
};

const element = <img src={user.avatarUrl}></img>;

const Hello = (prop) => {
  return (
    <>
      <h1>{prop.name}</h1>
      {element}
      <ul style={{ listStyleType: "none" }}>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
};

const Bio = () => {
  return (
    <>
      <div className="intro">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <br />
        <b>
          And <i>pictures</i>
        </b>
        of scientists!
      </p>
    </>
  );
};

export default Hello;

export { Bio };
