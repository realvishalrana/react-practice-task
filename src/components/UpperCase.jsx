import React, { useState } from "react";

const UpperCase = () => {
  const [username, setUsername] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setUsername(event.target.value.toUpperCase());
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={handleInput}
      />
      {username}
    </div>
  );
};

export default UpperCase;
