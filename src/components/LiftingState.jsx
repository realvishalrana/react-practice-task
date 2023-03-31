import React, { useState } from "react";

const LiftingState = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <Input label="first value" value={text} onChange={handleChange} />
      <Input label="Second value" value={text} onChange={handleChange} />
    </div>
  );
};

const Input = ({ label, value, onChange }) => {
  return (
    <label>
      {label}
      <input value={value} onChange={onChange} />
    </label>
  );
};

export default LiftingState;
